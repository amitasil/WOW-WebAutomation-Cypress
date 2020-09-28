describe('B2B Login Test', function() {
    it('Does the login into the new B2B website', function() {

        cy.visit('https://uat-atwork.woolworths.com.au/')

        cy.contains('Login').click()

        cy.url().should('include', '/shop/securelogin')

        cy.get('#loginForm-Email').type('arawat@woolworths.com.au')

        cy.get('#loginForm-Password').type('test1234')

        cy.get('#loginForm button').click()

        cy.url().should('include', '/shop/fulfilmentmethod')

        cy.contains('Confirm to shop').click()

        cy.contains('My Account')

        cy.get('#header-panel a.button.button--primary.coreHeader-signupButton').should('have.backgroundColor', '#3a474e')

        cy.contains('Lists').click

        cy.get('#header-panel shared-core-header nav a:nth-child(1)')

        cy.contains('Discover')
    })
})