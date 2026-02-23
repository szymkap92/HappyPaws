import type { Lang } from '@/lib/i18n';

export type LocalizedText = Record<Lang, string>;

export interface ServiceDefinition {
  id: string;
  name: LocalizedText;
}

export interface QuizWeight {
  serviceId: string;
  points: number;
}

export interface QuizOption {
  id: string;
  label: LocalizedText;
  weights: QuizWeight[];
}

export interface QuizQuestion {
  id: string;
  prompt: LocalizedText;
  options: QuizOption[];
}

export interface QuizAnswer {
  questionId: string;
  optionId: string;
}

export interface ScoredService extends ServiceDefinition {
  score: number;
  percent: number;
}

interface ScoreOptions {
  maxResults?: number;
  minimumPercent?: number;
}

function calculatePercent(score: number, maxScore: number, minimumPercent: number): number {
  if (maxScore <= 0 || score <= 0) return 0;
  const raw = Math.round((score / maxScore) * 100);
  return Math.max(minimumPercent, Math.min(100, raw));
}

export function scoreQuiz(
  questions: QuizQuestion[],
  answers: QuizAnswer[],
  services: ServiceDefinition[],
  options: ScoreOptions = {}
): ScoredService[] {
  const { maxResults = 5, minimumPercent = 55 } = options;
  const scores = new Map<string, number>();

  for (const service of services) {
    scores.set(service.id, 0);
  }

  for (const answer of answers) {
    const question = questions.find((item) => item.id === answer.questionId);
    if (!question) continue;

    const option = question.options.find((item) => item.id === answer.optionId);
    if (!option) continue;

    for (const weight of option.weights) {
      const current = scores.get(weight.serviceId) ?? 0;
      scores.set(weight.serviceId, current + weight.points);
    }
  }

  const sorted = services
    .map((service) => ({
      ...service,
      score: scores.get(service.id) ?? 0
    }))
    .sort((a, b) => b.score - a.score);

  const nonZero = sorted.filter((service) => service.score > 0);
  const shortlist = (nonZero.length > 0 ? nonZero : sorted).slice(0, maxResults);
  const maxScore = shortlist[0]?.score ?? 0;

  return shortlist.map((service) => ({
    ...service,
    percent: calculatePercent(service.score, maxScore, minimumPercent)
  }));
}
