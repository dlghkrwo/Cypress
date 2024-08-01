

describe('My First Test', () => {
    it('verify title-positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/") 
        cy.title().should('eq', 'OrangeHRM')
    })

    it('verift title-negative test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/") 
        cy.title().should('eq', 'OrangeHRM123')
    })



  })



//   describe('My First Test', function() {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })