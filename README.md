# GROMOVA — фотограф в Калининграде

Сайт-портфолио фотографа: главная с hero-каруселью, подборка работ, страницы съёмок с галереями и модальным просмотром фото, блок «обо мне» и форма обратной связи.

**Сайт:** https://gromova-photo-kld.ru

## Стек

- [Next.js 16](https://nextjs.org) (App Router, server actions, intercepting routes для модального просмотра фото)
- React 19, TypeScript
- CSS Modules, без UI-библиотек
- [Resend](https://resend.com) для отправки заявок с формы
- [sharp](https://sharp.pixelplumbing.com) для подготовки фотографий

## Запуск локально

Нужен Node.js 22 и yarn.

```bash
yarn install
cp .env.example .env.local   # заполнить значения
yarn dev
```

Сайт откроется на http://localhost:3000.

Переменные окружения (`.env.local` локально, `.env` на сервере):

| Переменная       | Для чего                                        |
| ---------------- | ----------------------------------------------- |
| `RESEND_API_KEY` | ключ Resend, через него уходят письма с формы   |
| `CONTACT_EMAIL`  | почта, на которую приходят заявки               |
| `BASE_URL`       | публичный адрес сайта, нужен для sitemap и OG   |

Без `RESEND_API_KEY` сайт работает, но форма не отправит письмо.

## Скрипты

| Команда       | Что делает                                              |
| ------------- | ------------------------------------------------------- |
| `yarn dev`    | dev-сервер                                              |
| `yarn build`  | production-сборка в `.next/standalone`                  |
| `yarn start`  | запуск собранного сайта                                 |
| `yarn lint`   | ESLint                                                  |
| `yarn photos` | подготовка фото из `raw/` в `public/photos/` (см. ниже) |

## Как добавить съёмку

Исходники фотографий лежат в папке `raw/` (в git не попадает), оптимизированные версии в `public/photos/`.

1. Создать папку `raw/<slug>/` и положить туда JPEG-файлы с именами `01.jpg`, `02.jpg` и так далее.
2. Запустить `yarn photos`. Скрипт `scripts/prepare-photos.ts` уменьшит фото до 3000 px по длинной стороне, сожмёт, положит в `public/photos/<slug>/` и перепишет `src/content/photos.generated.ts` с размерами каждого файла. Уже обработанные файлы пропускаются, `yarn photos --force` пересобирает всё.
3. Добавить съёмку в `src/content/shoots.ts`: slug, категория, название, год, место, описание, обложка и список фото с alt-текстами.
4. При необходимости обновить `src/content/bento.ts` (подборка на главной) и `src/content/hero.ts` (слайды в шапке).

Если в контенте указан файл, которого нет в `public/photos/`, `yarn photos` завершится с ошибкой и перечислит недостающие пути. Сборка тоже упадёт: хелпер `photo()` требует, чтобы размеры файла были в манифесте.

Портрет для блока «обо мне» лежит в `raw/about/`, скрипт кладёт его в `src/images/`.

## Структура

```
src/
  app/            маршруты: главная, /shoots/[slug], /shoots/[slug]/photo/[id],
                  sitemap, robots, OG-картинки, server action формы
  components/     Hero, Portfolio, Shoots, Gallery, PhotoModal, About, Contact, ...
  content/        весь текстовый контент и списки фото
  lib/site.ts     публичный URL сайта
scripts/
  prepare-photos.ts   обработка фото и генерация манифеста размеров
public/photos/    оптимизированные фотографии
raw/              исходники фото (не в git)
```

## Деплой

Сайт крутится на VPS: Node.js под pm2, перед ним nginx с сертификатом Let's Encrypt. Из-за server action статический экспорт не подходит.

Обновление сайта после пуша в `master`: зайти на сервер по SSH и выполнить `~/deploy.sh` (git pull, сборка, перезапуск pm2).
