# Important Note!
To run the json-server, use `json-server ./src/assets/quizzes.json`

# QuizPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Writeup

Project: Online Quiz

Rough Specifications
- [x] 1 Question Shown at a Time
- [x] Next button
- [x] Submit Button
- [x] Results (Scored based on questions)
- [x] (Option to choose between 2 Quizzes)

Backlog
- [x] Create API for questions/answers**
- [x] Create component for quiz question
- [x] Create component for results

** Create/use a JSON api for quiz questions

=======================================

Step by Step Process:

Initialized the project using ng new quiz-portal.

Push initial files onto github.

Install bootstrap (npm install bootstrap , npm install jquery), add to build styles and scripts

Create the JSON data and JSON-server (using `json-server ./src/assets/quizzes.json`).

Created main and quiz components using `ng g c <component_name>`

Added common functionality to main component (navbar, dropdown).

Added quiz functionality to quiz component.

Created a model class for questions and quizzes (model.quiz.ts).

The model class will be used in conjunction with the service.

Created a service for quiz (quiz.service.ts), and implemented to call server.
Added all routes to app-routing.module.ts.

Created functionality to navigate quiz questions, grade quiz, and submit quiz.

Created a results screen (for grades).

Created a welcome screen (instructions/etiquette to take quiz).

