# Fitness Coach Landing Page

Адаптивный лендинг для персонального тренера с упором на чистую вёрстку, производительность и кроссбраузерность.

👉 Демо: https://antonina-krekotun.netlify.app  
👉 Код: https://github.com/SemenKr/AntoninaKrekotunCoach  

---

## Ключевые особенности

- Адаптивная вёрстка (mobile-first)  
- Кроссбраузерная совместимость  
- Семантическая HTML-разметка  
- Использование методологии БЭМ  
- Оптимизация изображений и SVG  
- Pixel-perfect вёрстка по макету  
- Линтеры и форматтер для стабильного качества кода  

---

## Что реализовано

- Построение адаптивного интерфейса под разные устройства  
- Организация CSS-архитектуры с использованием БЭМ  
- Оптимизация загрузки и отображения ресурсов  
- Работа с SVG-спрайтами  
- Обеспечение корректного отображения в разных браузерах  

---

## Цели проекта

- Чистая и поддерживаемая вёрстка по макету  
- Набор практик, который удобно защищать на собеседовании  
- Понятная структура проекта и предсказуемый build  

---

## Что улучшено для портфолио

- Исправлена работа слайдеров и добавлен отложенный импорт Swiper  
- Уточнены якоря и доступность навигации и интерактивов  
- Ускорена загрузка: код слайдера вынесен в отдельные чанки  
- Добавлены линтеры, форматтер и CI-проверки  

---

## Стек

HTML · CSS · SCSS · БЭМ  

---

## Структура проекта

- `src/` — исходники (HTML, SCSS, JS, изображения)  
- `config/` — настройки Gulp и Webpack  
- `docs/` — скриншоты и Lighthouse-отчёты  

---

## Скриншоты

### Desktop (1440px)
![Desktop](docs/screenshots/desktop.jpg)

### Tablet (1024px)
![Tablet](docs/screenshots/tablet.jpg)

### Mobile (390px)
![Mobile](docs/screenshots/mobile.jpg)

### Форма (секция #order)
![Form](docs/screenshots/form.jpg)

---

## Lighthouse (Mobile)

Замер: 2026-03-31, локальная сборка `npm run build` (Lighthouse CLI).

| Метрика | До | После |
| --- | --- | --- |
| Performance | 72 | 71 |
| Accessibility | 95 | 95 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

Отчеты: [before](docs/lighthouse/before-mobile.report.html), [after](docs/lighthouse/after-mobile.report.html)

---

## Размер бандлов (production)

| Артефакт | До | После |
| --- | --- | --- |
| CSS `style.css` | 140 KiB | 123 KiB |
| JS `app.min.js` (entry) | 102 KiB | 22.1 KiB |

Примечание: Swiper вынесен в асинхронные чанки (`97.app.min.js`, `652.app.min.js`) и загружается при инициализации слайдеров.

---

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Проверки качества

```bash
npm run lint
```

```bash
npm run format
```

```bash
npm run test
```
