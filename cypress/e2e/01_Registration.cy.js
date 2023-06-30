/// <reference types="cypress"/>

import {faker} from "@faker-js/faker";
import RegistrationPage from '../support/pages/RegistrationPage';
import LoginPage from '../support/pages/LoginPage';

let user;
const registrationPage = new RegistrationPage();

before(() => {
  user = {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
  cy.writeFile('cypress/fixtures/userdata.json', user);
});

it('Registration', () => {
  registrationPage.open();
  registrationPage.clickLoginButton();
  registrationPage.clickNotYetCustomerLink();
  registrationPage.assertRegistrationHeader();
  registrationPage.fillEmail(user.email);
  registrationPage.fillPassword(user.password);
  registrationPage.fillRepeatPassword(user.password);

  cy.log(user.email);
  cy.log(user.password)

  registrationPage.selectSecurityQuestion('Your eldest siblings middle name?');
  registrationPage.fillSecurityAnswer('My best teacher in Cypress ;)');
  registrationPage.submitRegistration();
});

const loginPage = new LoginPage()

it('Authorization', () => {
  loginPage.open();
  loginPage.fillEmail(user.email);
  loginPage.fillPassword(user.password);
  loginPage.submitLogin();

  cy.log(`Auth user with email: ${user.email} and pass: ${user.password}`);
});

