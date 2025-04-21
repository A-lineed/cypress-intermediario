describe('Logout', () => {

    beforeEach('', () => {
        cy.login()
        cy.visit('/')
    })

    it('Logout com sucesso', () => {
        cy.Logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })

})   