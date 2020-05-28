describe('Series', () => {
  it('should go to `/series` when `/series` is visited', () => {
    cy.visit('/series/1009351');

    cy.location('pathname').should('include', 'series');
  });

  it('should load series when receive id', () => {
    cy.visit('/series/1009351');

    cy.get('[data-testid="card"]').should((elem) => {
      return expect(elem.length > 0).to.be.true;
    });
  });

  it('should go to `404` when not receive valid id', () => {
    cy.visit('/series/123123');

    cy.url().should('include', '404');
  });

  it('should redirect when click on card', () => {
    cy.visit('/series/1009351');

    cy.location('pathname').should('include', 'series');

    cy.get('[data-testid="card"]').first().click();

    cy.location('origin').should('include', 'marvel');
  });
});
