describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should go to `/` when `/` is visited', () => {
    cy.location('pathname').should('eq', '/');
  });

  it('should search when type on search input', () => {
    cy.get('input').type('Hulk');

    cy.get('[data-testid="card"] h2').should((elem) => {
      expect(elem.first()).to.have.text('Hulk');
    });
  });

  it('should show "not char found" when not result', () => {
    cy.get('input').type('asdasdadasdasd');

    cy.contains('No character found, try again');
  });

  it('should redirect when click on card', () => {
    cy.location('pathname').should('eq', '/');
    cy.get('[data-testid="card"]').eq(4).click();

    cy.url().should('include', '/series/');
  });
});
