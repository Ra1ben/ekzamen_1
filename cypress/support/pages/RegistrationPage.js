class RegistrationPage {
    open() {
      cy.visit('/');
      cy.get('.close-dialog').click();
    }
  
    clickLoginButton() {
      cy.get('#navbarAccount')
        .contains('Account')
        .click();
      cy.get('#navbarLoginButton')
        .contains('Login')
        .click();
    }
  
    clickNotYetCustomerLink() {
      cy.get('.primary-link')
        .contains('Not yet a customer?')
        .should('be.visible')
        .click();
    }
  
    fillEmail(email) {
      cy.get('#emailControl')
        .type(email)
        .should('have.value', email);
    }
  
    fillPassword(password) {
      cy.get('#passwordControl')
        .type(password)
        .should('have.value', password);
    }
  
    fillRepeatPassword(password) {
      cy.get('#repeatPasswordControl')
        .type(password)
        .should('have.value', password);
    }
  
    selectSecurityQuestion(question) {
      cy.get('.mat-select-arrow-wrapper').click();
      cy.get(`#mat-option-3 .mat-option-text`).contains(question).click();
    }
  
    fillSecurityAnswer(answer) {
      cy.get('#securityAnswerControl')
        .type(answer);
    }
  
    submitRegistration() {
      cy.get('#registerButton')
        .should('be.enabled')
        .contains(' Register ')
        .click();
    }
  
    assertRegistrationHeader() {
      cy.get('h1')
        .contains('User Registration');
    }
  
    assertSecurityQuestionError() {
      cy.get('#mat-error-6')
        .contains(' Please provide an answer to your security question. ');
    }
  }
  
  export default RegistrationPage;
  