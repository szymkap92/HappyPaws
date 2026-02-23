import type { LocalizedText } from '@/lib/quizScoring';

export interface TestimonialItem {
  id: string;
  petName: string;
  guardian: string;
  rating: number;
  quote: LocalizedText;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 't1',
    petName: 'Bruno',
    guardian: 'Kasia K.',
    rating: 5,
    quote: {
      pl: 'Przepiękny efekt i świetne podejście do naszego pieska. Wrócił spokojny i wyglądał cudownie.',
      en: 'Beautiful result and wonderful approach to our dog. He came back calm and looked amazing.',
      de: 'Wunderschönes Ergebnis und toller Umgang mit unserem Hund. Er kam entspannt zurück und sah großartig aus.'
    }
  },
  {
    id: 't2',
    petName: 'Luna',
    guardian: 'Marek P.',
    rating: 5,
    quote: {
      pl: 'Bardzo miła atmosfera, wszystko dokładnie wyjaśnione. Na pewno wrócimy do Happy Paws.',
      en: 'Very kind atmosphere, everything was explained clearly. We will definitely come back to Happy Paws.',
      de: 'Sehr angenehme Atmosphäre, alles wurde genau erklärt. Wir kommen auf jeden Fall wieder zu Happy Paws.'
    }
  },
  {
    id: 't3',
    petName: 'Nela',
    guardian: 'Agnieszka S.',
    rating: 5,
    quote: {
      pl: 'Pierwsza wizyta szczeniaka przebiegła lepiej, niż się spodziewaliśmy. Dużo cierpliwości i serca.',
      en: 'Our puppy first visit went better than expected. A lot of patience and heart.',
      de: 'Der erste Welpenbesuch lief besser als erwartet. Sehr viel Geduld und Herz.'
    }
  }
];
