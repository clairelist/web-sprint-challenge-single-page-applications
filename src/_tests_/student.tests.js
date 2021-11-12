//HERE WE GO !
//cypress tests I myself wrote

describe('student app',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput =()=> cy.get('input[name=text]');

    it('can write in name input field',()=>{
        nameInput().should('have.value','')
        .type('abc')
        .should('have.value','abc')
    })
})