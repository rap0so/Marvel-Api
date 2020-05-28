describe('404', () => {
  beforeEach(() => {
    cy.visit('/404');
  });

  it('should go to `/series` when `/series` is visited', () => {
    cy.location('pathname').should('include', '404');
  });

  it('should show header', () => {
    cy.contains('Page Not Found');
  });

  it('should redirect when click on link back', () => {
    cy.location('pathname').should('include', '404');

    cy.get('a').click();

    cy.location('pathname').should('be.equal', '/');
  });
});
