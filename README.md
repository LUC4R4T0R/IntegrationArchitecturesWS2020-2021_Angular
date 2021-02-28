# IntegrationArchitecturesWS20202021Angular

Dieses Projekt bildet das in Angular (JavaScript / TypeScript) implementierte Frontend einer
Anwendung, die als semesterbegleitendes Projekt in Integration Architectures erstellt
wurde. Die Anwendung soll flexible Boni anhand evaluierter Leistungsdaten und Verkaufsdaten
erstellen.  
Das Backend ist mit OrangeHRM und OpenCRX integriert.

Die Frontend die diese Anwendung bereitstellt, ist für die Nutzung der passenden [API](https://github.com/LUC4R4T0R/integrationarchitecturesws2020-2021_node.js)
ausgelegt.

Beim Start des Backends wird ein user mit username admin und password admin, falls kein User mit diesem Namen existiert.

## Installation

Diese Anwendung wird in Node.js betrieben. Für die Verbindung zum Backend muss 
eine Proxy-Weiterleitung in der proxy.conf.json konfiguriert passend sein.

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
