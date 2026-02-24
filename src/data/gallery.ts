import type { ImageMetadata } from 'astro';
import type { LocalizedText } from '@/lib/quizScoring';

import brunetBefore from '@/assets/images/effects/brunet-before.png';
import brunetAfter from '@/assets/images/effects/brunet-after.png';
import karmelBefore from '@/assets/images/effects/karmel-before.png';
import karmelAfter from '@/assets/images/effects/karmel-after.png';
import leosBefore from '@/assets/images/effects/leos-before.png';
import leosAfter from '@/assets/images/effects/leos-after.png';
import sniezkaBefore from '@/assets/images/effects/sniezka-before.png';
import sniezkaAfter from '@/assets/images/effects/sniezka-after.png';

export interface BeforeAfterPair {
  id: string;
  dogName: string;
  beforeSrc: ImageMetadata;
  afterSrc: ImageMetadata;
  beforeAlt: LocalizedText;
  afterAlt: LocalizedText;
}

export const galleryPairs: BeforeAfterPair[] = [
  {
    id: 'brunet',
    dogName: 'Brunet',
    beforeSrc: brunetBefore,
    afterSrc: brunetAfter,
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
    beforeSrc: karmelBefore,
    afterSrc: karmelAfter,
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
    beforeSrc: leosBefore,
    afterSrc: leosAfter,
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
    beforeSrc: sniezkaBefore,
    afterSrc: sniezkaAfter,
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
