describe('empty spec', () => {
  it('Login com sucesso', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')

  })

})