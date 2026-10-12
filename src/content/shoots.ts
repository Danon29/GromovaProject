import { Shoot } from '@/content/types'
import { photo as photoFrom } from '@/content/photo'

const photo = (dir: string, n: number, alt: string) =>
  photoFrom(`/photos/${dir}/${String(n).padStart(2, '0')}.jpg`, alt)

const firstDir = 'nadezhda'
const secondDir = 'nastya'
const thirdDir = 'blue-event'
const fourthDir = 'karina-piter'
const fifthDir = 'karina-home'

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
    slug: 'karina-home',
    category: 'portrait',
    title: 'Карина · Дома',
    year: 2024,
    location: 'Калининград · Дома',
    description:
      'Домашняя портретная фотосессия в Калининграде: Карина в своей квартире, мягкий дневной свет и камерные кадры.',
    cover: photo(fifthDir, 4, 'Карина дома'),
    photos: [
      photo(fifthDir, 1, 'Карина на фоне стены смотрит в камеру'),
      photo(fifthDir, 2, 'Карина на фоне стены'),
      photo(fifthDir, 3, 'Карина на фоне города'),
      photo(fifthDir, 4, 'Карина красивое освещение'),
      photo(fifthDir, 5, 'Карина смотрит в кадр'),
      photo(fifthDir, 6, 'Карина лежит на диване'),
      photo(fifthDir, 7, 'Карина лежит на диване, приближенно'),
      photo(fifthDir, 8, 'Карина смотрит в кадр 2'),
      photo(fifthDir, 9, 'Карина на красивом фоне'),
      photo(fifthDir, 10, 'Карина дым'),
      photo(fifthDir, 11, 'Карина на диване'),
      photo(fifthDir, 12, 'Карина на красивом фоне 2'),
      photo(fifthDir, 13, 'Карина на красивом фоне 3'),
      photo(fifthDir, 14, 'Карина на красивом фоне 4'),
      photo(fifthDir, 15, 'Карина на красивом фоне 5'),
      photo(fifthDir, 16, 'Карина на красивом фоне 6'),
    ],
  },
  {
    slug: 'karina-piter',
    category: 'portrait',
    title: 'Карина · Санкт-Петербург',
    year: 2024,
    location: 'Санкт-Петербург',
    description: 'Портретная съёмка Карины в Санкт-Петербурге: прогулка по городу и живые кадры без постановки.',
    cover: photo(fourthDir, 1, 'Карина'),
    photos: [
      photo(fourthDir, 1, 'Карина на фоне стены'),
      photo(fourthDir, 2, 'Карина на фоне собора'),
      photo(fourthDir, 3, 'Карина на фоне собора 2'),
      photo(fourthDir, 4, 'Карина на фоне собора 3'),
      photo(fourthDir, 5, 'Собор'),
      photo(fourthDir, 6, 'Карина на фоне собора 4'),
      photo(fourthDir, 7, 'Карина у реки'),
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
] as const satisfies readonly Shoot[]

export type ShootSlug = (typeof shoots)[number]['slug']
