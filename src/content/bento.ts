import { BentoItem } from '@/content/types'
import { photo } from '@/content/photo'

export const bentoItems = [
  {
    photo: photo('/photos/portfolio/02.jpg', 'Портрет: Александра'),
    label: 'девушка · Красная площадь',
    span: 4,
    height: 560,
  },
  {
    photo: photo('/photos/portfolio/01.jpg', 'Портрет: Валерия'),
    label: 'портрет · затемнение',
    span: 2,
    height: 560,
  },
  {
    photo: photo('/photos/portfolio/03.jpg', 'Саша и лестница'),
    label: 'лестница',
    span: 2,
    height: 620,
  },
  {
    photo: photo('/photos/portfolio/04.jpg', 'Выступление, две девушки общий план'),
    label: 'мероприятие',
    span: 4,
    height: 620,
  },
  {
    photo: photo('/photos/portfolio/06.jpg', 'Девушки на сцене в синем свете'),
    label: 'сцена · девушки',
    span: 4,
    height: 560,
  },
  {
    photo: photo('/photos/portfolio/05.jpg', 'Настя на фоне открытого неба'),
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
