class LoginPage {
    open() {
      cy.visit('/#/login');
      cy.get('.close-dialog').click();
      cy.get('.cc-btn').click();
    }
  
    clickLoginButton() {
    cy.get('#navbarAccount')
        .contains('Account')
        .click();

    cy.get('#navbarLoginButton')
        .contains('Login')
        .click();
    }

    fillEmail(email) {
      cy.get('#email')
        .type(email)
        .should('have.value', email);
    }
  
    fillPassword(password) {
      cy.get('#password')
        .type(password)
        .should('have.value', password);
    }
  
    submitLogin() {
      cy.get('#loginButton')
        .click();
    }

    errorMessage() {
        cy.get('.error')
        .contains('Invalid email or password.')
    }
  }
  
  export default LoginPage;
  