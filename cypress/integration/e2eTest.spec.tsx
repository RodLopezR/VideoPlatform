describe('e2e VideoPlatform', () => {
  it('Start navegation', () => {
    cy.visit('http://localhost:3000');
  });
  it('Insert data in input', () => {
    cy.wait(200);
    cy.get('input[id=input-search]').clear().type('Iron man', { delay: 10 });
  });
  it('Start search', () => {
    cy.wait(200);
    cy.get('#btnSearch').click();
  });
  it('Verify home page', () => {
    cy.wait(1000);
    expect(cy.get('.link-item')).to.not.equal(0);
    expect(cy.get('#pagination-zone')).to.not.equal(0);
    cy.get('.link-item').eq(0).click();
  });
  it('Click into item', () => {
    cy.wait(1000);
    cy.url().should('include', '1726');
  });
  it('Verify movie page', () => {
    cy.wait(1000);
    expect(cy.get('img')).to.not.equal(0);
    expect(cy.get('h1')).to.not.equal(0);
    cy.get('h1').eq(0).contains('Iron Man');
  });
});
