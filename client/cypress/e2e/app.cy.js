describe ("Home", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173")
    })
    it("Deberia mostrarse Welcome to Mar con Art", () =>{
        cy.get("h1").contains("Welcome to Mar con Art")
    })
})
