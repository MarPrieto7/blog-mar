describe('FooterCom Component', () => {
    it('Se muestra correctamente', () => {
      cy.visit('http://localhost:5173'); // Reemplaza 'ruta-a-tu-componente' con la URL de tu componente
  
      // Verifica que el título del Footer sea 'Mar con Art'
      cy.contains('Mar con Art').should('exist');
  
      // Verifica que los enlaces al Museo del Prado y a Github estén presentes
      cy.contains('Museo del Prado').should('exist');
      cy.contains('Github').should('exist');
  
      // Puedes continuar agregando más verificaciones según sea necesario para tu caso específico
    });
  });
  