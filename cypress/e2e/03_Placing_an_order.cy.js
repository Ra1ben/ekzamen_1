/// <reference types="cypress"/>

import user from '../fixtures/userdata.json';
import OrderPage from '../support/pages/OrderPage';
import LoginPage from '../support/pages/LoginPage';

const orderPage = new OrderPage();
const loginPage = new LoginPage();

it('Placing an order', () => {
  loginPage.open();
  cy.log('Open website');
  loginPage.clickLoginButton();
  orderPage.notYetCustomerLink();
  loginPage.fillEmail(user.email);
  loginPage.fillPassword(user.password);
  loginPage.submitLogin();
  cy.log('User authorization');
  orderPage.addProducts();
  orderPage.proceedToCheckout();
  orderPage.selectAddress();
  orderPage.fillAddressForm();
  cy.log('Added address');
  orderPage.selectShippingMethod();
  cy.log('Added shipment');
  orderPage.selectPaymentMethod();
  orderPage.fillPaymentDetails();
  cy.log('Added payment details');
  orderPage.submitOrder();
  cy.log('Order is success');
  orderPage.assertOrderConfirmation();
});


it('Placing an order with invalid coupon', () => {
  loginPage.open();
  cy.log('Open website');
  loginPage.clickLoginButton();
  orderPage.notYetCustomerLink();
  loginPage.fillEmail(user.email);
  loginPage.fillPassword(user.password);
  loginPage.submitLogin();
  cy.log('User autorization');
  orderPage.addProducts();
  orderPage.proceedToCheckout();
  orderPage.selectAddress();
  orderPage.fillAddressForm();
  cy.log('Added address');
  orderPage.selectShippingMethod();
  cy.log('Added shipment');
  orderPage.selectPaymentMethod();
  orderPage.fillPaymentDetails();
  cy.log('Added payment details');
  orderPage.fillCoupon();
  cy.log('Invalid coupon');
})
  