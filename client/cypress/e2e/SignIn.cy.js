describe ("SigIn", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173")
    })
    it("Deberia mostrarse boton de Sign In", () =>{
        cy.get('a > .group > .items-stretch').contains("Sign In")
    })
})