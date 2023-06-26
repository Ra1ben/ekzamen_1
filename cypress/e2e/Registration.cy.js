/// <reference types="cypress"/>

import {faker} from "@faker-js/faker";

  let user;

  before(() => {
    user = {
      email: faker.internet.email(),
      password: faker.internet.password()
    }
    cy.writeFile('cypress/fixtures/userdata.json', user);
  })

  it('Registration', () => {
    cy.log('Open website')
    cy.visit('/');
    cy.get('.close-dialog').click();

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
    .click();

    cy.log('User registration');

    cy.get('#registerButton')
    .should('be.disabled')
    
    cy.get('h1')
    .contains('User Registration');

    cy.get('.cc-btn')
    .click();

    cy.get('#emailControl')
    .type(user.email)
    .should('have.value', user.email);

    cy.get('#passwordControl')
    .type(user.password)
    .should('have.value', user.password);

    cy.log(user.email);
    cy.log(user.password);

    cy.get('#repeatPasswordControl')
    .type(user.password)
    .should('have.value', user.password);

    cy.get('.mat-select-arrow-wrapper')
    .click();

    cy.get('#mat-option-3 .mat-option-text')
    .contains('Your eldest siblings middle name?' )
    .click();

    cy.get('#securityAnswerControl')
    .focus()
    .blur()

    cy.get('#mat-error-6')
    .contains(' Please provide an answer to your security question. '); 
    
    cy.get('#securityAnswerControl')
    .type('My best teacher in Cypress ;)')

    cy.get('#registerButton')
    .should('be.enabled')
    .contains(' Register ')
    .click();
  })

  it('Autorization', () => {
    cy.log('Open website')
    cy.visit('/#/login');
    cy.get('.close-dialog').click();
    cy.get('.cc-btn').click()


    cy.get('#email')
    .type(user.email)
    .should('have.value', user.email);

    cy.get('#password')
    .type(user.password)
    .should('have.value', user.password);

    cy.get('#loginButton')
    .click()
    
    cy.log(`Auth user with email: ${user.email} and pass: ${user.password}`)
  })