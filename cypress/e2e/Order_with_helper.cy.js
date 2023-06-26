/// <reference types="cypress"/>

import user from '../fixtures/userdata.json';
import faker from 'faker';
import { findProduct } from '../support/helper';


it('order with helper', () => {
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

    ///

    findProduct(' Quince Juice (1000ml) ')

    cy.log('Add products')

    cy.get('body app-root div mat-sidenav-container mat-sidenav-content app-search-result div div div.ng-star-inserted mat-grid-list div mat-grid-tile:nth-child(8) div mat-card div:nth-child(2) button')
    .click()

    cy.get('.mat-toolbar-row .mat-focus-indicator.ng-star-inserted')
    .click()

    cy.get('#checkoutButton')
    .click()

    cy.log('Select in address')

    cy.get('div.ng-star-inserted .mat-focus-indicator .mat-button-wrapper span')
    .click();

    const randomCountry = faker.address.country();
    const randomName = faker.name.findName();
    const randomTelephone = faker.phone.phoneNumber('050#######');
    const randomZipCode = faker.address.zipCode('#####');
    const randomAddress = faker.address.streetAddress();
    const randomCity = faker.address.city();
    const randomState = faker.address.state();


    cy.get('#mat-input-3')
    .type(randomCountry)
    .should('have.value', randomCountry)

    cy.get('#mat-input-4')
    .type(randomName)
    .should('have.value', randomName)

    cy.get('#mat-input-5')
    .type(randomTelephone)
    .should('have.value', randomTelephone)

    cy.get('#mat-input-6')
    .type(randomZipCode)
    .should('have.value', randomZipCode)

    cy.get('#address')
    .type(randomAddress)
    .should('have.value', randomAddress)

    cy.get('#mat-input-8')
    .type(randomCity)
    .should('have.value', randomCity)

    cy.get('#mat-input-9')
    .type(randomState)
    .should('have.value', randomState)

    cy.get('#submitButton .mat-button-wrapper')
    .click()

    cy.log('Address added')

    cy.get('.mat-radio-outer-circle')
    .first()
    .click({ force: true })

    cy.get('.btn-next .mat-button-wrapper span')
    .click({ force: true })

    cy.get('.mat-radio-inner-circle')
    .eq(0) 
    .click({ force: true });

    cy.get('.nextButton .mat-button-wrapper')
    .click()

    cy.log('Delivery address')

    cy.get('#mat-expansion-panel-header-0')
    .click()

    cy.get('#mat-input-10')
    .type(randomName)
    .should('have.value', randomName)

    const randomCard = faker.finance.creditCardNumber('6666############');


    cy.get('#mat-input-11')
    .type(randomCard)
    .should('have.value', randomCard)

    cy.get('#mat-input-12')
    .select('6')

    cy.get('#mat-input-13')
    .select('2088')

    cy.get('#submitButton .mat-button-wrapper')
    .click()

    cy.log('Payment options added')

    cy.get('.mat-radio-inner-circle')
    .eq(0)
    .click({ force: true })

    cy.get('.nextButton')
    .click()

    cy.get('#checkoutButton')
    .click()

    cy.get('[fxflex="60%"] :nth-child(1) .confirmation')
    .contains('Thank you for your purchase!')

    cy.get('[fxflex="60%"] > :nth-child(1) > div')
    .contains('Your order has been placed and is being processed. You can check for status updates on our ')

    cy.log('Placing an oreder is done')

  })
  