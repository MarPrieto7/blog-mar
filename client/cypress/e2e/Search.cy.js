describe('Search', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173');
    });
  
    it('debería mostrar el botón de Apply Filters', () => {
    
        cy.get('.lg\:hidden > .flex').contains("Apply Filters")
      });
});
