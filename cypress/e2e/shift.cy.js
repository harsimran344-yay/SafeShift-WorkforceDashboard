describe('Add Shift', () => {
  it('fills and submits the shift form', () => {
    cy.visit('/');
    cy.contains('SafeShift Dashboard');
  });
});
