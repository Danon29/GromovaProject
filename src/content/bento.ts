import { BentoItem } from '@/content/types'

export const bentoItems = [
  {
    photo: { src: '/photos/portfolio/02.jpg', alt: 'Портрет: Александра' },
    label: 'девушка · Красная площадь',
    span: 4,
    height: 560,
  },
  {
    photo: { src: '/photos/portfolio/01.jpg', alt: 'Портрет: Валерия' },
    label: 'портрет · затемнение',
    span: 2,
    height: 560,
  },
  {
    photo: { src: '/photos/portfolio/03.jpg', alt: 'Саша и лестница' },
    label: 'лестница',
    span: 2,
    height: 620,
  },
  {
    photo: { src: '/photos/portfolio/04.jpg', alt: 'Выступление, две девушки общий план' },
    label: 'мероприятие',
    span: 4,
    height: 620,
  },
  {
    photo: { src: '/photos/portfolio/06.jpg', alt: 'Девушки на сцене в синем свете' },
    label: 'сцена · девушки',
    span: 4,
    height: 560,
  },
  {
    photo: { src: '/photos/portfolio/05.jpg', alt: 'Настя на фоне открытого неба' },
    label: 'девушка · небо',
    span: 2,
    height: 560,
  },
] as const satisfies readonly BentoItem[]

export const ShootsInfo = {
  lead: 'Каждая съёмка — маленькая история: улицы города, тёплый свет, живые эмоции. Я ловлю кадры, которые захочется пересматривать.',
} as const satisfies {
  lead: string
}
