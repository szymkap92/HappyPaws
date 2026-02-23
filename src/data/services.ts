import type { LocalizedText, ServiceDefinition } from '@/lib/quizScoring';

export type ServiceId =
  | 'bath-basic'
  | 'haircut-bath'
  | 'hand-stripping'
  | 'dematting'
  | 'anal-glands'
  | 'paws-nails'
  | 'eyes-ears'
  | 'full-package'
  | 'puppy-visit';

export interface ServiceItem extends ServiceDefinition {
  id: ServiceId;
  description: LocalizedText;
  priceFrom: number;
}

export const services: ServiceItem[] = [
  {
    id: 'bath-basic',
    name: {
      pl: 'Kąpiel pielęgnacyjna',
      en: 'Care bath',
      de: 'Pflegebad'
    },
    priceFrom: 80,
    description: {
      pl: 'Delikatne oczyszczenie, suszenie i odświeżenie sierści.',
      en: 'Gentle cleansing, drying and coat refresh.',
      de: 'Sanfte Reinigung, Trocknung und Fellauffrischung.'
    }
  },
  {
    id: 'haircut-bath',
    name: {
      pl: 'Strzyżenie + kąpiel',
      en: 'Haircut + bath',
      de: 'Schneiden + Bad'
    },
    priceFrom: 140,
    description: {
      pl: 'Kompleksowa pielęgnacja z fryzurą dopasowaną do rasy i potrzeb.',
      en: 'Complete grooming with a style tailored to breed and needs.',
      de: 'Komplette Pflege mit rasse- und bedarfsgerechtem Schnitt.'
    }
  },
  {
    id: 'hand-stripping',
    name: {
      pl: 'Trymowanie (wszystkie rasy)',
      en: 'Hand stripping (all breeds)',
      de: 'Trimmen (alle Rassen)'
    },
    priceFrom: 160,
    description: {
      pl: 'Pielęgnacja sierści szorstkowłosej dla różnych ras.',
      en: 'Hand stripping for rough-coated breeds.',
      de: 'Trimmpflege für rauhaarige Rassen.'
    }
  },
  {
    id: 'dematting',
    name: {
      pl: 'Rozczesywanie kołtunów',
      en: 'Dematting',
      de: 'Entfilzen'
    },
    priceFrom: 50,
    description: {
      pl: 'Ostrożna praca nad splątaną sierścią z dbałością o komfort psa.',
      en: 'Careful work on tangled coat with full comfort in mind.',
      de: 'Sorgfältiges Entfilzen mit Fokus auf den Komfort des Hundes.'
    }
  },
  {
    id: 'anal-glands',
    name: {
      pl: 'Wyciskanie gruczołów okołoodbytowych',
      en: 'Anal gland expression',
      de: 'Entleerung der Analdrüsen'
    },
    priceFrom: 40,
    description: {
      pl: 'Krótki, higieniczny zabieg wykonywany delikatnie i z naciskiem na komfort psa.',
      en: 'A short hygienic service performed gently with your dog comfort in mind.',
      de: 'Eine kurze hygienische Leistung, sanft und mit Fokus auf den Komfort des Hundes.'
    }
  },
  {
    id: 'paws-nails',
    name: {
      pl: 'Pielęgnacja łap i pazurów',
      en: 'Paw and nail care',
      de: 'Pfoten- und Krallenpflege'
    },
    priceFrom: 40,
    description: {
      pl: 'Skracanie pazurów i uporządkowanie łapek.',
      en: 'Nail trim and tidy paw finish.',
      de: 'Krallen kürzen und Pfoten in Form bringen.'
    }
  },
  {
    id: 'eyes-ears',
    name: {
      pl: 'Pielęgnacja okolic oczu i uszu',
      en: 'Eye and ear area care',
      de: 'Pflege von Augen- und Ohrenbereich'
    },
    priceFrom: 30,
    description: {
      pl: 'Delikatne oczyszczenie i estetyczne wykończenie.',
      en: 'Gentle cleaning and neat finish.',
      de: 'Sanfte Reinigung und gepflegter Abschluss.'
    }
  },
  {
    id: 'full-package',
    name: {
      pl: 'Pakiet pełnej pielęgnacji',
      en: 'Full grooming package',
      de: 'Komplettpaket Pflege'
    },
    priceFrom: 180,
    description: {
      pl: 'Kąpiel, suszenie, strzyżenie/trymowanie, łapki, uszy i wykończenie.',
      en: 'Bath, drying, haircut/stripping, paws, ears and final finish.',
      de: 'Bad, Trocknung, Schneiden/Trimmen, Pfoten, Ohren und Finish.'
    }
  },
  {
    id: 'puppy-visit',
    name: {
      pl: 'Wizyta adaptacyjna dla szczeniaka',
      en: 'Puppy adaptation visit',
      de: 'Eingewöhnungsbesuch für Welpen'
    },
    priceFrom: 90,
    description: {
      pl: 'Spokojne oswojenie z pielęgnacją i pierwszym kontaktem z salonem.',
      en: 'Calm introduction to grooming and first salon contact.',
      de: 'Ruhige Gewöhnung an Pflege und den ersten Salonbesuch.'
    }
  }
];
