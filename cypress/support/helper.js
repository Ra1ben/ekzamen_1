export function findProduct(productName) {
  return cy.get('body').then(($body) => {
    if ($body.find('.item-name:contains("' + productName + '")').length > 0) {
      return cy.get('.item-name:contains("' + productName + '")');
    } else {
      cy.get('.mat-paginator-navigation-next').click();
      return findProduct(productName);
    }
  });
}


  