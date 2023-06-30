/// <reference types="cypress"/>

import user from '../fixtures/userdata.json';
import LoginPage from '../support/pages/LoginPage';

const loginPage = new LoginPage()

it('Authorization success', () => {
  loginPage.open();
  loginPage.clickLoginButton();
  loginPage.fillEmail(user.email);
  loginPage.fillPassword(user.password);
  loginPage.submitLogin();

  cy.log(`Auth user with email: ${user.email} and pass: ${user.password}`);
});

it('Authorization failed', () => {

  loginPage.open();
  loginPage.clickLoginButton();
  loginPage.fillEmail('testtest@gmail.com');
  loginPage.fillPassword('qwertyqwerty');
  loginPage.submitLogin();
  loginPage.errorMessage();

  cy.log('Auth user with email: testtest@gmail.com and pass: qwertyqwerty is failed');
});
  