describe('Search', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/search?searchTerm=');
    });
  
    it('debería mostrar el botón de Apply Filters', () => {
    
      cy.get('.flex-col > .group > .items-stretch').contains("Apply Filters")
      });
});
