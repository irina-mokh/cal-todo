# Deploy: https://cal-todo.netlify.app/

## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

# ТЗ

Создать To-Do лист в виде календаря, где каждый день представлен как список задач.
При клике на день открывается модальное окно со списком задач. В этом окне можно
создавать новые задачи, удалять их и помечать как выполненные.
## Условия
● Frontend: Реализация с использованием React и всего его встроенного
функционала. 

● Хранение данных: На ваше усмотрение (например, локальное хранилище,
context API и т.д.).

### Критерии (реализация всего списка не обязательна, важнее качество, а не количество)
1. Приятный внешний вид
2. Семантическая верстка
3. Адаптивный дизайн
4. Реализация через Flexbox или Grid (использование Tailwind или других
CSS-фреймворков не желательно)
5. Желательно использовать БЭМ
6. Маркировка праздничных дней с использованием isDayOff() API
7. Вывод задач по неделе
8. Использование TypeScript
9. Покрытие интерфейса тестами
10. Система профилей: у каждого профиля свой список задач, не отображаемый в
другом профиле
11. Реализовать Dependency Inversion для внешних HTTP-запросов
12. Понятная структура проекта
13. Разворачивание проекта в Docker
