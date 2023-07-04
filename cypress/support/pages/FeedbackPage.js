import { faker } from "@faker-js/faker";

const randomComment = faker.lorem.sentences();
const limitedComment = randomComment.slice(0, 100);

class feedbackPage {
    open() {
        cy.visit('/');
        cy.get('.close-dialog').click();
        cy.get('.cc-btn').click();
    }

    openFeedback(){
        cy.get('[aria-label="Open Sidenav"]')
        .click()
    
        cy.get('[routerlink="/contact"] .mat-list-item-content .menu-text')
        .click()
    }

    addComment(){
        cy.get('#comment')
        .type(limitedComment)
        .should('have.value', limitedComment);
        cy.log('Added come comment')
    }
    
    addRaiting(){
        cy.get('#rating')
        .focus()
        .type('{rightarrow}{rightarrow}');  
        cy.log('Added rating')
    }

    captchaResult(){
        cy.get('#captcha')
        .invoke('text')
        .then((captchaText) => {
      
      let result = eval(captchaText);
    
        cy.get('#captchaControl')
        .type(result.toString());
    });
    
        cy.log('Сaptcha solution')
    }

    submitButton(){
        cy.get('#submitButton')
        .click()
        
        cy.get('.mat-simple-snack-bar-content')
        .contains('Thank you for your feedback.')
    }

    wrongResultCaptcha(){
        cy.get('#captchaControl')
        .type('/')
        .blur()

        cy.get('#mat-error-2')
        .contains('Invalid CAPTCHA code ')
  
        cy.log('Invalid Сaptcha ')

        cy.get('#submitButton')
        .should('be.disabled')
    }
}

export default feedbackPage