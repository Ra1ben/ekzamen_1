/// <reference types="cypress"/>

import user from '../fixtures/userdata.json';

it('Authorization success', () => {
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

it('Authorization failed', () => {
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
  .type('testtest@gmail.com')
  .should('have.value', 'testtest@gmail.com');

  cy.get('.mat-form-field-suffix .mat-focus-indicator')
  .click()

  cy.get('#password')
  .type('qwertyqwerty')

  cy.get('#loginButton')
  .click()

  cy.get('.error')
  .contains('Invalid email or password.')

  cy.log('Auth user with email: testtest@gmail.com and pass: qwertyqwert is failed')
})
  