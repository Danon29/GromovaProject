import { Shoot } from '@/content/types'

const photo = (dir: string, n: number, alt: string) => ({
  src: `/photos/${dir}/${String(n).padStart(2, '0')}.jpg`,
  alt,
})

const firstDir = 'nadezhda'
const secondDir = 'nastya'
const thirdDir = 'blue-event'

export const shoots = [
  {
    slug: 'nadezhda',
    category: 'portrait',
    title: 'Надежда',
    year: 2024,
    location: 'Калининград · Центр города',
    description:
      'Портретная съёмка Нади в центре Калининграда: камерные кадры со стулом посреди улицы, крупные планы, праздничный торт и финал на фоне моря.',
    cover: photo(firstDir, 1, 'Надя на стуле'),
    photos: [
      photo(firstDir, 1, 'Надя на стуле'),
      photo(firstDir, 2, 'Надя крупный план'),
      photo(firstDir, 3, 'Надя в позе на полу'),
      photo(firstDir, 4, 'Надя с тортом'),
      photo(firstDir, 5, 'Надя на стуле в позе эмбриона'),
      photo(firstDir, 6, 'Надя на фоне моря'),
      photo(firstDir, 7, 'Надя на фоне моря улыбается'),
      photo(firstDir, 8, 'Надя на фоне моря 2'),
    ],
  },
  {
    slug: 'nastya',
    category: 'portrait',
    title: 'Анастасия',
    year: 2025,
    location: 'Калининград · Центр города',
    description:
      'Городская фотосессия Насти: лестницы и кафе старого города, тёплый свет ламп и птицы, случайно попавшие в кадр.',
    cover: photo(secondDir, 1, 'Настя на фоне птиц'),
    photos: [
      photo(secondDir, 1, 'Настя на фоне птиц'),
      photo(secondDir, 2, 'Настя на лестнице'),
      photo(secondDir, 3, 'Настя перед лампой'),
      photo(secondDir, 4, 'Настя в кафе'),
      photo(secondDir, 5, 'Настя в кафе 2'),
    ],
  },
  {
    slug: 'blue-event',
    category: 'event',
    title: 'Вечер в синем',
    year: 2026,
    location: 'Калининград · Центр города',
    description: 'Репортаж с мероприятия: девушки на сцене в синем свете, живые эмоции и общие планы зала.',
    cover: photo(thirdDir, 1, 'Девушка на синем фоне'),
    photos: [
      photo(thirdDir, 1, 'Девушка на синем фоне'),
      photo(thirdDir, 2, 'Две девушки'),
      photo(thirdDir, 3, 'Девушки смотрят вверх'),
      photo(thirdDir, 4, 'Много девушек'),
    ],
  },
  {
    slug: 'blue-event2',
    category: 'event',
    title: 'Вечер в синем 2',
    year: 2026,
    location: 'Калининград · Центр города',
    description: 'Репортаж с мероприятия: девушки на сцене в синем свете, живые эмоции и общие планы зала.',
    cover: photo(thirdDir, 2, 'Девушка на синем фоне'),
    photos: [
      photo(thirdDir, 1, 'Девушка на синем фоне'),
      photo(thirdDir, 2, 'Две девушки'),
      photo(thirdDir, 3, 'Девушки смотрят вверх'),
      photo(thirdDir, 4, 'Много девушек'),
    ],
  },
] as const satisfies readonly Shoot[]

export type ShootSlug = (typeof shoots)[number]['slug']
