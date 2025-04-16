describe('Logout', () => {

    beforeEach('', () => {
        cy.visit('/')
        cy.login()
    })

    it.only('Logout com sucesso', () => {
        cy.Logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })

})