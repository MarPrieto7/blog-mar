describe ("Limones verano", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173")
    })
    it("Deberia mostrarse Limones verano", () =>{
        cy.get(':nth-child(9) > .p-3 > .text-lg').contains("Limones verano")
    })
})