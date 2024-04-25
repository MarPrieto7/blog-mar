describe ("Dragonfly", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173")
    })
    it("Deberia mostrarse Dragonfly", () =>{
        cy.get(':nth-child(9) > .p-3 > .text-lg').contains("Dragonfly")
    })
})