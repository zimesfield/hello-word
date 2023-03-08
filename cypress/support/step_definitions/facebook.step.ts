import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

Given(/^I am on the facebook home page$/, function () {
    cy.visit('/')
});
When(/^I input my email address or phone number$/, function () {
    cy.get('input[data-testid=royal_email]').type("cyprian")
});
When(/^I input my password$/, function () {
    cy.get('input[data-testid=royal_pass]').type("asdf;lkj")
});
When(/^I click the submit button$/, function () {
    cy.get('[data-testid="royal_login_button"]').click()
});
Then(/^I should see a login failed page$/, function () {
    // cy.get('[id=ssfErrorAlert]').tr
});