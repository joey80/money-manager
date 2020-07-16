it('loads the page', () => {
  cy.visit('/home');
  cy.contains('Bill is a cat.').should('be.visible');
});
