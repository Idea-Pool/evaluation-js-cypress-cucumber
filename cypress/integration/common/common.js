import {defineParameterType, Given, Before, Then, When, After} from 'cypress-cucumber-preprocessor/steps';

const pages = ['Angular', 'YouTube'];

const baseURL = {
    angular: 'https://angular.io/',
    youtube: 'https://youtube.com/'
};

defineParameterType({
    name: 'page',
    regexp: new RegExp(pages.join("|")),
})

After({tags: 'reloadAfter'}, () => {
    cy.log('AFTER HOOK', reloadAfter)
    cy.reload();
})

Given('I open {page} page', (page) => {
    cy.visit(baseURL[page.toLowerCase()], {
        onBeforeLoad(win) {
            Object.defineProperty(win.navigator, 'language', {value: 'en-GB'});
            Object.defineProperty(win.navigator, 'languages', {value: ['en']});
            Object.defineProperty(win.navigator, 'accept_languages', {value: ['en']});
        },
        headers: {
            'Accept-Language': 'en',
        },
    });
});

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title);
});

Then('The following elements should be visible:',  (dataTable) => {
    const flatTable = dataTable.raw().flat();
    cy.log(flatTable);
    for (const i of flatTable) {
        cy.get(i).should('be.visible');
    }
});
