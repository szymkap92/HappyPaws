import type { ImageMetadata } from 'astro';
import type { LocalizedText } from '@/lib/quizScoring';

import brunetBefore from '../../img/BrunetPrzed.png';
import brunetAfter from '../../img/BrunetPo.png';
import karmelBefore from '../../img/KarmelPrzed.png';
import karmelAfter from '../../img/KarmelPo.png';
import leosBefore from '../../img/leośPrzed.png';
import leosAfter from '../../img/LeosPo.png';
import sniezkaBefore from '../../img/śnieżkaPrzed.png';
import sniezkaAfter from '../../img/śnieżkaPo.png';
import spikeBefore from '../../img/SpikePrzed.png';
import spikeAfter from '../../img/spikepo.png';
import lolekBefore from '../../img/lolekprzed.png';
import lolekAfter from '../../img/lolekpo.png';
import maxBefore from '../../img/maxprzed.png';
import maxAfter from '../../img/maxpo.png';

export interface BeforeAfterPair {
  id: string;
  dogName: string;
  beforeSrc: ImageMetadata;
  afterSrc: ImageMetadata;
  beforeAlt: LocalizedText;
  afterAlt: LocalizedText;
}

export const allGalleryPairs: BeforeAfterPair[] = [
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
  },
  {
    id: 'spike',
    dogName: 'Spike',
    beforeSrc: spikeBefore,
    afterSrc: spikeAfter,
    beforeAlt: {
      pl: 'Spike przed pielęgnacją',
      en: 'Spike before grooming',
      de: 'Spike vor der Pflege'
    },
    afterAlt: {
      pl: 'Spike po pielęgnacji',
      en: 'Spike after grooming',
      de: 'Spike nach der Pflege'
    }
  },
  {
    id: 'lolek',
    dogName: 'Lolek',
    beforeSrc: lolekBefore,
    afterSrc: lolekAfter,
    beforeAlt: {
      pl: 'Lolek przed pielęgnacją',
      en: 'Lolek before grooming',
      de: 'Lolek vor der Pflege'
    },
    afterAlt: {
      pl: 'Lolek po pielęgnacji',
      en: 'Lolek after grooming',
      de: 'Lolek nach der Pflege'
    }
  },
  {
    id: 'max',
    dogName: 'Max',
    beforeSrc: maxBefore,
    afterSrc: maxAfter,
    beforeAlt: {
      pl: 'Max przed pielęgnacją',
      en: 'Max before grooming',
      de: 'Max vor der Pflege'
    },
    afterAlt: {
      pl: 'Max po pielęgnacji',
      en: 'Max after grooming',
      de: 'Max nach der Pflege'
    }
  }
];

const homepageOrder = ['leos', 'brunet', 'sniezka'] as const;

export const homepageGalleryPairs: BeforeAfterPair[] = homepageOrder
  .map((id) => allGalleryPairs.find((pair) => pair.id === id))
  .filter((pair): pair is BeforeAfterPair => Boolean(pair));
