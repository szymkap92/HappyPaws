import type { LocalizedText } from '@/lib/quizScoring';

export interface BeforeAfterPair {
  id: string;
  dogName: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: LocalizedText;
  afterAlt: LocalizedText;
}

// TODO: Aby podmienić zdjęcia, wgraj pliki do /public/images/effects i zaktualizuj tylko ścieżki tutaj.
export const galleryPairs: BeforeAfterPair[] = [
  {
    id: 'brunet',
    dogName: 'Brunet',
    beforeSrc: '/images/effects/brunet-before.png',
    afterSrc: '/images/effects/brunet-after.png',
    beforeAlt: {
      pl: 'Brunet przed pielęgnacją',
      en: 'Brunet before grooming',
      de: 'Brunet vor der Pflege'
    },
    afterAlt: {
      pl: 'Brunet po pielęgnacji',
      en: 'Brunet after grooming',
      de: 'Brunet nach der Pflege'
    }
  },
  {
    id: 'karmel',
    dogName: 'Karmel',
    beforeSrc: '/images/effects/karmel-before.png',
    afterSrc: '/images/effects/karmel-after.png',
    beforeAlt: {
      pl: 'Karmel przed pielęgnacją',
      en: 'Karmel before grooming',
      de: 'Karmel vor der Pflege'
    },
    afterAlt: {
      pl: 'Karmel po pielęgnacji',
      en: 'Karmel after grooming',
      de: 'Karmel nach der Pflege'
    }
  },
  {
    id: 'leos',
    dogName: 'Leoś',
    beforeSrc: '/images/effects/leos-before.png',
    afterSrc: '/images/effects/leos-after.png',
    beforeAlt: {
      pl: 'Leoś przed pielęgnacją',
      en: 'Leos before grooming',
      de: 'Leos vor der Pflege'
    },
    afterAlt: {
      pl: 'Leoś po pielęgnacji',
      en: 'Leos after grooming',
      de: 'Leos nach der Pflege'
    }
  },
  {
    id: 'sniezka',
    dogName: 'Śnieżka',
    beforeSrc: '/images/effects/sniezka-before.png',
    afterSrc: '/images/effects/sniezka-after.png',
    beforeAlt: {
      pl: 'Śnieżka przed pielęgnacją',
      en: 'Snowy before grooming',
      de: 'Schneeflocke vor der Pflege'
    },
    afterAlt: {
      pl: 'Śnieżka po pielęgnacji',
      en: 'Snowy after grooming',
      de: 'Schneeflocke nach der Pflege'
    }
  }
];
