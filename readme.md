
# cypress-cucumber
Cypress 10+ with Cucumber boilerplate tests for [telynx.com](https://telnyx.com/).

### Contents
- [Pre-requisite](#Pre-requisite)
- [Technology](#Technology)
- [Allure report](#allure-report)
- [Usage](#Usage)
- [Requirements](#Requirements)
- [File structure](#file-structure)
- [Test structure](#test-structure)
- [POM file structure](#pom-file-structure)
- [Testing](#Testing)
- [Result](#Result)
- [To do](#to-do)

### Pre-requisite

-   [Allure](https://docs.qameta.io/allure/#_get_started)  
    It may be [classic solutions with java](https://github.com/allure-framework/allure2#download) or [allure-commandline npm package](https://www.npmjs.com/package/allure-commandline) running binary under the hood.
-   :exclamation: To install and run the project, you need [NodeJS](https://nodejs.org/) v16+.

### Technology
- [WebdriverIO](https://webdriver.io/)
- [allure](https://docs.qameta.io/allure-report/)

### Allure report

-   is generated by github action on every push. See [.github/workflows/node.js.yml](.github/workflows/node.js.yml)
-   historical data is preserved, so reports will have nice graphs :)
-   hosted with github pages. Check [allure-report](https://dmytromaslo.github.io/telnyx.com-wdio-allure/)

### Usage
- Download project
- Go to root folder
- Install the npm package with the command:

```sh
$ npm install
```
to use Docker-compose:
```sh
$ docker-compose up
```
or 
```sh
$ npm run docker
```

### Requirements
 :exclamation: To install and run the project, you need [NodeJS](https://nodejs.org/) v16+.


### POM file structure
Page Object Model (POM) is a design pattern, popularly used in test automation that creates Object Repository for web UI elements. The advantage of the model is that it reduces code duplication and improves test maintenance. Example below, for details use the [official documentation](https://docs.cypress.io/guides/end-to-end-testing/protractor-to-cypress#Cypress-with-Page-Objects)
```js
import Pages from './Pages'
const buttonAddNewProfile = 'Add New Profile'//CSS locators
const inputOutboundVoiceProfileName = 'input[name="name"]'
const buttonCreate = 'button[type="submit"]'

class ProgrammableVoicePage extends Pages{//Сlass title is the same as the page 
    clickButtonAddNewProfile(){//Method Title, some parameters 
        cy.get('button').contains(buttonAddNewProfile).click()
    }
```
### Testing
To run tests in the headless mod in the root directory, execute
first use:
```sh
npm run test
```
next time to see history
```sh
npm run test:report
```


### To Do
:heavy_check_mark: write 20 testcase

:heavy_check_mark: launch a pipeline on Github

:heavy_check_mark: set up docker-compose

:white_large_square: rewrite everything
