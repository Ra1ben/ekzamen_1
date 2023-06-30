import { faker } from "@faker-js/faker";

import { findProduct } from '../helper';

const randomCountry = faker.location.country();
const randomName = faker.person.firstName();
const randomTelephone = faker.phone.number('050#######');
const randomZipCode = faker.location.zipCode('#####');
const randomAddress = faker.location.streetAddress();
const randomCity = faker.location.city();
const randomState = faker.location.state();
const randomCard = faker.finance.creditCardNumber('6666############');

class OrderPage {
  notYetCustomerLink() {
    cy.get('.primary-link')
      .contains('Not yet a customer?')
      .should('be.visible')
  }

  addProducts() {
    cy.get('mat-grid-tile:nth-child(2) div mat-card div:nth-child(2) button')
      .click();
  
    cy.get('mat-grid-tile:nth-child(3) div mat-card div:nth-child(2) button')
      .click();
  }

  proceedToCheckout() {
    cy.get('.mat-toolbar-row .mat-focus-indicator.ng-star-inserted')
      .click();
  
    cy.get('#checkoutButton')
      .click();
  }

  selectAddress() {
    cy.get('div.ng-star-inserted .mat-focus-indicator .mat-button-wrapper span')
      .click();
  }

  fillAddressForm() {
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
      .click();
  }

  selectShippingMethod() {
    cy.get('.mat-radio-outer-circle')
      .first()
      .click({ force: true });
  
    cy.get('.btn-next .mat-button-wrapper span')
      .click({ force: true });
  }

  selectPaymentMethod() {
    cy.get('.mat-radio-inner-circle')
      .eq(0) 
      .click({ force: true });
  
    cy.get('.nextButton .mat-button-wrapper')
      .click();
  }

  fillPaymentDetails() {
    cy.get('#mat-expansion-panel-header-0')
      .click();
  
    cy.get('#mat-input-10')
      .type(randomName)
      .should('have.value', randomName)
  

  
    cy.get('#mat-input-11')
      .type(randomCard)
      .should('have.value', randomCard)
  
    cy.get('#mat-input-12')
      .select('6')
  
    cy.get('#mat-input-13')
      .select('2088')
  
    cy.get('#submitButton .mat-button-wrapper')
      .click();
  }

  submitOrder() {
    cy.get('.mat-radio-inner-circle')
      .eq(0)
      .click({ force: true });
  
    cy.get('.nextButton')
      .click();
  
    cy.get('#checkoutButton')
      .click();
  }

  assertOrderConfirmation() {
    cy.get('[fxflex="60%"] :nth-child(1) .confirmation')
      .contains('Thank you for your purchase!');
  
    cy.get('[fxflex="60%"] > :nth-child(1) > div')
      .contains('Your order has been placed and is being processed. You can check for status updates on our ');
  }

  fillCoupon(){
    cy.get('#mat-expansion-panel-header-1')
    .click()

    cy.get('#coupon')
    .type('1111111111')
    .should('have.value', '1111111111');

    cy.get('#applyCouponButton .mat-button-wrapper')
    .click();

    cy.get('.mat-expansion-panel-body .error')
    .contains('Invalid coupon. ');

    cy.get('.nextButton')
    .should('be.disabled');
  }

  addProductHelper() {
    findProduct('Quince Juice (1000ml) ').then(() => {
      cy.log('Add product');
  
      cy.contains('Quince Juice (1000ml)')
      .parents('mat-grid-tile')
      .find('div mat-card div:nth-child(2) button')
      .click();

      cy.wait(5000);
    });
  }

  proceedToCheckoutHelper() {

    cy.get('.mat-toolbar-row .mat-focus-indicator.ng-star-inserted')
      .click();

    cy.wait(2000);
    cy.get('#checkoutButton')
      .click();
  }
}

export default OrderPage;
