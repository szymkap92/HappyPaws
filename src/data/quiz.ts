import type { Lang } from '@/lib/i18n';
import type { LocalizedText, QuizQuestion } from '@/lib/quizScoring';

export interface QuizCopy {
  title: LocalizedText;
  startTitle: LocalizedText;
  startDescription: LocalizedText;
  startCta: LocalizedText;
  restartCta: LocalizedText;
  callCta: LocalizedText;
  messageCta: LocalizedText;
  thinking: Record<Lang, string[]>;
}

export const quizCopy: QuizCopy = {
  title: {
    pl: 'Dobierz pielęgnację',
    en: 'Find best care',
    de: 'Pflege finden'
  },
  startTitle: {
    pl: 'Pozwól mi dobrać pielęgnację dla Twojego psa',
    en: 'Let me match care for your dog',
    de: 'Lassen Sie mich die passende Pflege für Ihren Hund finden'
  },
  startDescription: {
    pl: 'Odpowiedz na 3 krótkie pytania, a przygotuję wstępne rekomendacje usług dopasowane do potrzeb Twojego pupila.',
    en: 'Answer 3 short questions and I will prepare initial care recommendations for your dog.',
    de: 'Beantworten Sie 3 kurze Fragen und ich bereite erste Pflegeempfehlungen für Ihren Hund vor.'
  },
  startCta: {
    pl: 'Zacznij quiz',
    en: 'Start quiz',
    de: 'Quiz starten'
  },
  restartCta: {
    pl: 'Zacznij od nowa',
    en: 'Start again',
    de: 'Neu starten'
  },
  callCta: {
    pl: 'Zadzwoń i umów wizytę',
    en: 'Call and book a visit',
    de: 'Anrufen und Termin buchen'
  },
  messageCta: {
    pl: 'Wyślij wiadomość',
    en: 'Send message',
    de: 'Nachricht senden'
  },
  thinking: {
    pl: [
      'Analizuję odpowiedzi...',
      'Dobieram rekomendacje pielęgnacji...',
      'Porównuję potrzeby pupila...',
      'Przygotowuję najlepsze opcje...'
    ],
    en: [
      'Analyzing answers...',
      'Matching care recommendations...',
      'Comparing your dog needs...',
      'Preparing best options...'
    ],
    de: [
      'Analysiere Antworten...',
      'Stelle Pflegeempfehlungen zusammen...',
      'Vergleiche die Bedürfnisse Ihres Hundes...',
      'Bereite die besten Optionen vor...'
    ]
  }
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'priority',
    prompt: {
      pl: 'Co chcesz poprawić najbardziej?',
      en: 'What would you like to improve most?',
      de: 'Was möchten Sie am meisten verbessern?'
    },
    options: [
      {
        id: 'mats',
        label: {
          pl: 'Kołtuny i trudne rozczesywanie',
          en: 'Mats and difficult brushing',
          de: 'Verfilzungen und schwieriges Entwirren'
        },
        weights: [
          { serviceId: 'dematting', points: 4 },
          { serviceId: 'full-package', points: 3 },
          { serviceId: 'haircut-bath', points: 2 }
        ]
      },
      {
        id: 'shedding',
        label: {
          pl: 'Nadmiar sierści / linienie',
          en: 'Too much shedding',
          de: 'Zu viel Haarverlust'
        },
        weights: [
          { serviceId: 'bath-basic', points: 4 },
          { serviceId: 'full-package', points: 3 }
        ]
      },
      {
        id: 'odor',
        label: {
          pl: 'Nieprzyjemny zapach i odświeżenie',
          en: 'Odor and freshening up',
          de: 'Geruch und Auffrischung'
        },
        weights: [
          { serviceId: 'bath-basic', points: 4 },
          { serviceId: 'eyes-ears', points: 2 }
        ]
      },
      {
        id: 'long-coat',
        label: {
          pl: 'Długa sierść, która wymaga strzyżenia',
          en: 'Long coat that needs a haircut',
          de: 'Langes Fell mit Bedarf an Schnitt'
        },
        weights: [
          { serviceId: 'haircut-bath', points: 5 },
          { serviceId: 'full-package', points: 3 }
        ]
      },
      {
        id: 'makeover',
        label: {
          pl: 'Pełna metamorfoza wyglądu',
          en: 'Full makeover',
          de: 'Komplette Verwandlung'
        },
        weights: [
          { serviceId: 'full-package', points: 5 },
          { serviceId: 'haircut-bath', points: 4 }
        ]
      },
      {
        id: 'puppy-first',
        label: {
          pl: 'Pierwsza spokojna pielęgnacja (szczeniak)',
          en: 'First calm grooming (puppy)',
          de: 'Erste ruhige Pflege (Welpe)'
        },
        weights: [
          { serviceId: 'puppy-visit', points: 5 },
          { serviceId: 'bath-basic', points: 2 }
        ]
      }
    ]
  },
  {
    id: 'goal',
    prompt: {
      pl: 'Jakiego efektu szukasz?',
      en: 'What result are you looking for?',
      de: 'Welches Ergebnis wünschen Sie sich?'
    },
    options: [
      {
        id: 'refresh',
        label: {
          pl: 'Szybkie odświeżenie',
          en: 'Quick refresh',
          de: 'Schnelle Auffrischung'
        },
        weights: [
          { serviceId: 'bath-basic', points: 4 },
          { serviceId: 'paws-nails', points: 2 },
          { serviceId: 'eyes-ears', points: 2 }
        ]
      },
      {
        id: 'regular',
        label: {
          pl: 'Regularna pielęgnacja',
          en: 'Regular grooming',
          de: 'Regelmäßige Pflege'
        },
        weights: [
          { serviceId: 'full-package', points: 4 },
          { serviceId: 'haircut-bath', points: 3 }
        ]
      },
      {
        id: 'visible-change',
        label: {
          pl: 'Wyraźna zmiana wyglądu',
          en: 'Visible look change',
          de: 'Deutliche Veränderung'
        },
        weights: [
          { serviceId: 'haircut-bath', points: 5 },
          { serviceId: 'full-package', points: 4 },
          { serviceId: 'hand-stripping', points: 3 }
        ]
      },
      {
        id: 'home-care',
        label: {
          pl: 'Łatwiejsza pielęgnacja w domu',
          en: 'Easier home maintenance',
          de: 'Leichtere Pflege zu Hause'
        },
        weights: [
          { serviceId: 'haircut-bath', points: 4 },
          { serviceId: 'dematting', points: 3 },
          { serviceId: 'full-package', points: 2 }
        ]
      },
      {
        id: 'gentle',
        label: {
          pl: 'Delikatna pielęgnacja bez stresu',
          en: 'Gentle stress-free care',
          de: 'Sanfte, stressfreie Pflege'
        },
        weights: [
          { serviceId: 'puppy-visit', points: 4 },
          { serviceId: 'bath-basic', points: 3 }
        ]
      }
    ]
  },
  {
    id: 'temperament',
    prompt: {
      pl: 'Jak opisał(a)byś swojego psa?',
      en: 'How would you describe your dog?',
      de: 'Wie würden Sie Ihren Hund beschreiben?'
    },
    options: [
      {
        id: 'calm',
        label: {
          pl: 'Spokojny i cierpliwy',
          en: 'Calm and patient',
          de: 'Ruhig und geduldig'
        },
        weights: [
          { serviceId: 'full-package', points: 3 },
          { serviceId: 'haircut-bath', points: 2 }
        ]
      },
      {
        id: 'sensitive',
        label: {
          pl: 'Wrażliwy / stresuje się',
          en: 'Sensitive / gets stressed',
          de: 'Sensibel / schnell gestresst'
        },
        weights: [
          { serviceId: 'puppy-visit', points: 4 },
          { serviceId: 'bath-basic', points: 3 },
          { serviceId: 'full-package', points: 2 }
        ]
      },
      {
        id: 'energetic',
        label: {
          pl: 'Energiczny i ruchliwy',
          en: 'Energetic and active',
          de: 'Energisch und aktiv'
        },
        weights: [
          { serviceId: 'bath-basic', points: 3 },
          { serviceId: 'paws-nails', points: 2 },
          { serviceId: 'haircut-bath', points: 2 }
        ]
      },
      {
        id: 'puppy',
        label: {
          pl: 'Szczeniak / pierwsze wizyty',
          en: 'Puppy / first visits',
          de: 'Welpe / erste Besuche'
        },
        weights: [
          { serviceId: 'puppy-visit', points: 5 },
          { serviceId: 'bath-basic', points: 2 }
        ]
      },
      {
        id: 'more-time',
        label: {
          pl: 'Wymaga więcej czasu przy pielęgnacji',
          en: 'Needs more grooming time',
          de: 'Benötigt mehr Zeit bei der Pflege'
        },
        weights: [
          { serviceId: 'full-package', points: 4 },
          { serviceId: 'dematting', points: 3 },
          { serviceId: 'haircut-bath', points: 2 }
        ]
      }
    ]
  }
];
