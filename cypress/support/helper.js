export function findProduct(productName) {
    cy.get('body').then(($body) => {
      if ($body.find('.item-name:contains("' + productName + '")').length > 0) {
        cy.get('.item-name:contains("' + productName + '")');
      } else {
        cy.get('.mat-paginator-navigation-next').click();
        findProduct(productName);
      }
    });
  }
  