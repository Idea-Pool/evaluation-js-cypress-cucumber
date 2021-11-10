# evaluation cypress-cucumber framework

## Built with

| Library                       | Description                                                                                                            |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) |cucumber/gherkin-syntaxed specs with [Cypress.io](https://docs.cypress.io/) |

## Get Started

### Installation

    > yarn install

## Implementing tests

Please find the detailed description in the source documentation:

[How to write tests](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#how-to-write-tests)

### Folder Structure

[How to organize tests](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#how-to-organize-the-tests)

### Using Cucumber Expression

[Cucumber Expressions](https://github.com/cucumber/cucumber-expressions#readme)

### Using RegExp

Regular Expression support isn't going away. Cucumber supports both Cucumber Expressions and Regular Expressions for defining Step Definitions, but you cannot mix Cucumber Expression syntax with Regular Expression syntax in the same expression. 
 
## Running tests

### Running tagged tests

Use [Cucumber Tag Expression](https://cucumber.io/docs/cucumber/api/#tag-expressions).

    > npx cypress-tags run -e TAGS='@current'

### GUI with Cypress Test Runner

[Opening Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#Opening-Cypress)

    > npx cypress open

## Idea Pool TA Tool evaluation

In this unusual evaluation, the goal was to evaluate how a custom library can work with cypress.
The focus was not on evaluation how cypress can solve the problem but to get some insights on how usable the cucumber plug-in is.

For cypress evaluation please check this tech [talk](https://videoportal.epam.com/video/VRg27Lo2) of Laszlo Szikszai.

## TODOS
- [x] Cucumber integration possibilities / libraries
- [x] Cucumber expression / RegExp
- [x] Cucumber reference: hooks, tags, background, data table, steps, step arguments
- [ ] Bundles
- [ ] Sharing context / step memory

## Evaluated Features:

- [x] Hooks
- [x] Tags
- [x] Background
- [x] Data Table
- [x] Steps
- [x] Outline
