import type { Lang } from '@/lib/i18n';
import type { LocalizedText } from '@/lib/quizScoring';

interface SeoEntry {
  title: string;
  description: string;
}

interface SectionCopy {
  title: LocalizedText;
  description: LocalizedText;
}

export const siteData = {
  brandName: 'Happy Paws',
  groomerName: 'Anna',
  phone: '+48 000 000 000',
  location: 'Dębica 39-200',
  hours: '8:00 - 19:00',
  hero: {
    eyebrow: {
      pl: 'Spokojna i profesjonalna pielęgnacja psów',
      en: 'Calm and professional dog grooming',
      de: 'Ruhige und professionelle Hundepflege'
    },
    title: {
      pl: 'Zadbam o wygląd i komfort Twojego psa',
      en: 'I care for your dog comfort and beautiful look',
      de: 'Ich kümmere mich um Komfort und schönes Aussehen Ihres Hundes'
    },
    description: {
      pl: 'W Happy Paws pielęgnacja to nie tylko estetyka, ale też wygoda i dobre samopoczucie pupila. Pracuję spokojnie, delikatnie i z indywidualnym podejściem do każdego psa.',
      en: 'At Happy Paws, grooming is more than style. It is comfort and well-being for your dog. I work calmly, gently and always with an individual approach.',
      de: 'Bei Happy Paws ist Pflege mehr als nur Optik. Es geht um Komfort und Wohlbefinden Ihres Hundes. Ich arbeite ruhig, sanft und individuell.'
    },
    primaryCta: {
      pl: 'Zarezerwuj wizytę',
      en: 'Book a visit',
      de: 'Termin buchen'
    },
    secondaryCta: {
      pl: 'Dobierz pielęgnację',
      en: 'Find best care',
      de: 'Pflege finden'
    },
    hint: {
      pl: 'Krótki quiz zajmie około 30 sekund',
      en: 'Short quiz takes around 30 seconds',
      de: 'Kurzes Quiz dauert etwa 30 Sekunden'
    }
  },
  about: {
    title: {
      pl: 'O mnie',
      en: 'About me',
      de: 'Über mich'
    },
    description: {
      pl: 'Mam na imię Anna i prowadzę Happy Paws - miejsce stworzone z myślą o spokojnej, bezpiecznej pielęgnacji psów. Zależy mi, aby każda wizyta przebiegała bez pośpiechu i w przyjaznej atmosferze. Dobieram pielęgnację do rodzaju sierści, potrzeb psa i jego temperamentu, tak aby efekt był piękny, ale też komfortowy dla pupila.',
      en: 'My name is Anna and I run Happy Paws, a place created for calm and safe dog grooming. Every visit is unhurried and friendly. I tailor care to coat type, needs and temperament, so the effect is beautiful and comfortable for your dog.',
      de: 'Ich heiße Anna und führe Happy Paws, einen Ort für ruhige und sichere Hundepflege. Jeder Termin läuft ohne Hektik in freundlicher Atmosphäre ab. Ich passe die Pflege an Felltyp, Bedürfnisse und Temperament an, damit das Ergebnis schön und angenehm ist.'
    },
    points: [
      {
        pl: 'Indywidualne podejście do każdego psa',
        en: 'Individual approach for every dog',
        de: 'Individuelle Betreuung für jeden Hund'
      },
      {
        pl: 'Delikatna praca w spokojnym tempie',
        en: 'Gentle work at a calm pace',
        de: 'Sanfte Arbeit in ruhigem Tempo'
      },
      {
        pl: 'Pielęgnacja dopasowana do sierści i rasy',
        en: 'Care tailored to coat and breed',
        de: 'Pflege passend zu Fell und Rasse'
      },
      {
        pl: 'Przyjazna atmosfera dla psa i opiekuna',
        en: 'Friendly atmosphere for dog and owner',
        de: 'Freundliche Atmosphäre für Hund und Halter'
      },
      {
        pl: 'Pierwsze wizyty szczeniaków mile widziane',
        en: 'Puppy first visits are very welcome',
        de: 'Erste Welpenbesuche sind herzlich willkommen'
      }
    ]
  },
  servicesSection: {
    title: {
      pl: 'Usługi',
      en: 'Services',
      de: 'Leistungen'
    },
    description: {
      pl: 'Dobieram zakres pielęgnacji do potrzeb psa i Twoich oczekiwań.',
      en: 'Each service is adapted to your dog needs and your expectations.',
      de: 'Jede Leistung wird auf die Bedürfnisse Ihres Hundes abgestimmt.'
    }
  } as SectionCopy,
  effectsSection: {
    title: {
      pl: 'Efekty pielęgnacji',
      en: 'Grooming results',
      de: 'Pflegeergebnisse'
    },
    description: {
      pl: 'Zobacz metamorfozy psów po wizycie w Happy Paws - przed i po pielęgnacji.',
      en: 'See transformations after a Happy Paws visit - before and after grooming.',
      de: 'Sehen Sie Verwandlungen nach einem Happy Paws Termin - vorher und nachher.'
    }
  } as SectionCopy,
  testimonialsSection: {
    title: {
      pl: 'Opinie opiekunów',
      en: 'Owners reviews',
      de: 'Bewertungen der Halter'
    },
    description: {
      pl: 'Najlepszą rekomendacją są spokojne psy po wizycie i zadowoleni opiekunowie.',
      en: 'The best recommendation is a calm dog after the visit and a happy owner.',
      de: 'Die beste Empfehlung sind entspannte Hunde nach dem Termin und zufriedene Halter.'
    }
  } as SectionCopy,
  contactSection: {
    title: {
      pl: 'Kontakt',
      en: 'Contact',
      de: 'Kontakt'
    },
    description: {
      pl: 'Masz pytanie przed pierwszą wizytą? Zadzwoń albo napisz - pomogę dobrać odpowiednią pielęgnację dla Twojego psa.',
      en: 'Any question before your first visit? Call or message me and I will help choose the right care for your dog.',
      de: 'Fragen vor dem ersten Termin? Rufen Sie an oder schreiben Sie mir - ich helfe bei der passenden Pflege.'
    }
  } as SectionCopy,
  footer: {
    note: {
      pl: 'Happy Paws - ciepła i profesjonalna pielęgnacja psów w Dębicy.',
      en: 'Happy Paws - warm and professional dog grooming in Debica.',
      de: 'Happy Paws - herzliche und professionelle Hundepflege in Debica.'
    }
  },
  seo: {
    pl: {
      title: 'Happy Paws | Pielęgnacja psów w Dębicy',
      description:
        'Happy Paws Anna - spokojna, profesjonalna pielęgnacja psów w Dębicy. Strzyżenie, kąpiel, trymowanie i konsultacyjny quiz pielęgnacji.'
    },
    en: {
      title: 'Happy Paws | Dog Grooming in Debica',
      description:
        'Happy Paws by Anna - calm, professional dog grooming in Debica. Haircuts, baths, hand stripping and quick care matching quiz.'
    },
    de: {
      title: 'Happy Paws | Hundepflege in Debica',
      description:
        'Happy Paws von Anna - ruhige, professionelle Hundepflege in Debica. Schneiden, Baden, Trimmen und kurzes Beratungsquiz.'
    }
  } satisfies Record<Lang, SeoEntry>,
  seoEffects: {
    pl: {
      title: 'Metamorfozy psów | Happy Paws Dębica',
      description:
        'Pełna galeria metamorfoz Happy Paws. Zobacz efekty przed i po pielęgnacji psów.'
    },
    en: {
      title: 'Dog Transformations | Happy Paws Debica',
      description:
        'Full Happy Paws transformation gallery. Explore before and after grooming results.'
    },
    de: {
      title: 'Hundeverwandlungen | Happy Paws Debica',
      description:
        'Vollständige Galerie der Happy Paws Verwandlungen. Sehen Sie alle Vorher-Nachher-Ergebnisse.'
    }
  } satisfies Record<Lang, SeoEntry>
};

export function t(text: LocalizedText, lang: Lang): string {
  return text[lang];
}
