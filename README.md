# PivotTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Deployment in other projects

This project has the following dependences:

  *  Jquery 3.4.1
  *  JqueryUI 1.12.1
  *  Plotly javascript library (optional for pivot charts) 1.52.2
  *  Pivottable.js 2.23.0
  *  Subtotal plugin for Pivottable.js 1.11.0-alpha.0

For npm packages check dependences.txt

The the required javascript files and the required order in which the should be loaded is the following:
1. node_modules/jquery/dist/jquery.min.js
1. node_modules/jquery-ui-dist/jquery-ui.min.js (only for pivotUI)
1. node_modules/plotly.js-dist/plotly.js
1. node_modules/pivottable/dist/pivot.min.js
1. node_modules/pivottable/dist/export_renderers.min.js
1. node_modules/pivottable/dist/plotly_renderers.min.js (only for pivot charts)
1. node_modules/pivottable/dist/tips_data.min.js (only contains test data)
1. node_modules/subtotal/dist/subtotal.min.js

Also the following CSS files are required:
1. node_modules/pivottable/dist/pivot.min.css
1. node_modules/subtotal/dist/subtotal.min.css

For the implemantation examples check src/app/app.component.ts . 

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
