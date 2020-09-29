describe('B2B Guest Page Verification', function() {
    it('Does verify the B2B Guest page', function() {
        cy.visit('https://uat-atwork.woolworths.com.au/')

        cy.contains('1300 665 386')

        cy.contains('Login')

        cy.get('img.coreHeader-logo').should('have.attr', 'alt', 'Woolworths at Work Home')

        cy.contains('Blog').click()

        cy.url().should('include', '/shop/page/blog')
    })
})