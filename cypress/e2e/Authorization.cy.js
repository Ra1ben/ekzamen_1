/// <reference types="cypress"/>

import user from '../fixtures/userdata.json';

it('Authorization', () => {
    cy.log('Open website')
    cy.visit('/');
    cy.get('.close-dialog').click();
    cy.get('.cc-btn').click()

    cy.log('Choice login form');
    cy.get('#navbarAccount')
    .contains('Account')
    .click();

    cy.get('#navbarLoginButton')
    .contains('Login')
    .click();
    
    cy.get('.primary-link')
    .contains('Not yet a customer?')
    .should('be.visible')

    cy.log('User autorization');

    cy.get('#email')
    .type(user.email)
    .should('have.value', user.email);

    cy.get('.mat-form-field-suffix .mat-focus-indicator')
    .click()

    cy.get('#password')
    .type(user.password)

    cy.get('#loginButton')
    .click()

    cy.log(`Auth user with email: ${user.email} and pass: ${user.password}`)
  })
  