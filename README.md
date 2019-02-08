# CV Generator

Простенький сервис по созданию/генерации красивого резюме.

Работает по-простому принципу:
1. Настраиваете "секции" с Вашей информацией
2. Сохраняете в формате PDF (из "Печати").

[Открыть](https://ermak-13.github.io/cv-generator/)

## Доступные секции
В секциях Вы заполняете информацию о себе. Каждая секция имеет свои настройки
контента и других параметров. Также можно менять порядок (расположение) секций
через drag-and-drop (перетаскивание).

Доступные следующие секции:
1. Основная информация
2. Контакты
3. Языки
4. Навыки
5. Образование
6. Работа
7. Портфолио
8. О себе

## Как это работает?
Сервис работает полностью без бекенда, все данные хранятся в localStorage
(поэтому избегайте загрузки больших картинок - в принципе они вам и не нужны тут).
Для фронтенда использовался Vue.js & Vuex.

При запуске локально, необходимо:
```
npm install
npm run serve
```
