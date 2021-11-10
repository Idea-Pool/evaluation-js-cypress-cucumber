import { defineParameterType, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
const bands = ['Iron Maiden', 'Metallica', 'Pantera', 'Judas Priest']

defineParameterType({
    name: "band",
    regexp: new RegExp(bands.join("|")),
});

When('I click {string} button', (title) => {
    cy.get('yt-formatted-string').contains(title).click();
});

When('I search for the {band} band', (band) => {
    cy.get('ytd-searchbox input[id=search]').type(band);
    cy.get('button[id=search-icon-legacy]').click();
});

When('I subscribe for a {string} request as {string} listener', (requestMatcher, listenerName) => {
    cy.intercept(requestMatcher).as(listenerName);
});

Then('The {string} shold get the {string} status', (listenerName, statusCode) => {
    cy.wait(`@${listenerName}`).its('response.statusCode').should('eq', statusCode);
});

Then(/^I see YouTube Search Input$/, () => {
    cy.get('ytd-searchbox input[id=search]').should('be.visible')
});

Then('I see search result list', () => {
    cy.get('ytd-two-column-search-results-renderer').should('be.visible');
});

Then('The title of the {string} result should contain {string}', (item, text) => {
    cy.get('ytd-search [id=video-title]')[item]().should('include.text', text);
});
