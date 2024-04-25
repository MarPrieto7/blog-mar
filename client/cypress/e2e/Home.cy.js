describe ("Home", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173")
    })
    it("Contact", () =>{
        cy.get(':nth-child(3) > .block > a').contains("Contact")
    })
})
