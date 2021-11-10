import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I see Angular logo in the navigation bar', () => {
    cy.get('.nav-link.home img').should('be.visible');
});

Then('I see Angular Logo in the hero section', () => {
    cy.get('.hero-logo').should('be.visible');
});