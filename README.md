# ImgGen Frontend

An angular frontend for DallE.

## Intro

A Spring application that serves as the backend for the angular frontend. This serves as an intermediate between the angular frontend and OpenAI servers.

## Install the following

1. NodeJS - [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
    - Check using `node --version`.
2. NPM should be automaticaclly installed with NodeJS.
    - Check using `npm --version`

## Running the project

1. CD into angular-frontend-imagGen folder
2. Install the modules using npm
   Run `npm install` in the angular project directory.
    - This should install the modules. It might take a while.
3. Start a live server
   Run `npm start`. It should start the server at `http://localhost:4200/`, which reloads when anything is changed.

## Sample prompts for different usecases

### Usecases

1. Generating images for an HR portal where employees can update their information

    Description prompt - `A 2 sentence description for a HR portal that allows employees to update their personal information.`

    Image prompts

    1. `A logo for a website where employees can easily manage and update their personal information. The logo should have a modern and professional design that portrays an atmosphere of ease and convenience. Use elements like a pencil or a stylus, or anything else that relates to writing and updating information.`

    2. `A blue and white phone with a pencil on its left side lying on a table. The background is white and well-lit.`

    3. `Circle with an image of an envelope in the center. The envelope should have an arrow pointing upwards and to the right, indicating progress or advancement.`

    4. `A piggy bank with a wrench beside it.`

## Extra

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. (Not necessary unless putting in production).

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.F

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
