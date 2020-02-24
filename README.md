# PivotTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Deployment of [Plotly Javascript library](https://plot.ly/javascript/) in other projects

This project has the following dependences:

  *  [jQuery](https://jquery.com/) 3.4.1
  *  [jQuery UI](https://jqueryui.com/) 1.12.1
  *  [Plotly Javascript library](https://plot.ly/javascript/) (optional for pivot charts) 1.52.2
  *  [Pivottable.js](https://github.com/nicolaskruchten/pivottable) 2.23.0
  *  [Subtotal](https://github.com/nagarajanchinnasamy/subtotal) plugin for Pivottable.js 1.11.0-alpha.0

For npm packages, please check dependences.txt

The the required javascript files and the required order in which they should be loaded is the following:
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

For the implementation examples, please check src/app/app.component.ts .

For further information on the usage of [Pivottable.js](https://github.com/nicolaskruchten/pivottable) and [Subtotal](https://github.com/nagarajanchinnasamy/subtotal), please check their README.md files and their wikis, both in their own GitHub pages.

Other chart renderers such as D3.js, C3.js or Google Charts are shipped with [Pivottable.js](https://github.com/nicolaskruchten/pivottable), but their respective Javascript plotting libraries should be installed as dependencies. 

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
