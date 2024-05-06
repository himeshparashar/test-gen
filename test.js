describe('Page Test', () => {
  beforeEach(() => {
    cy.visit('page.html')
  })

  it('should have a navbar with links', () => {
    cy.get('.navbar').should('exist')
    cy.get('.navbar a').should('have.length', 5)
    cy.get('.navbar a').should('contain', 'Home')
    cy.get('.navbar a').should('contain', 'About')
    cy.get('.navbar a').should('contain', 'Services')
    cy.get('.navbar a').should('contain', 'Portfolio')
    cy.get('.navbar a').should('contain', 'Contact')
  })

  it('should have a card with content', () => {
    cy.get('.card').should('exist')
    cy.get('.card h1').should('contain', 'Welcome!')
    cy.get('.card p').should('contain', 'This is a simple card in the center of the page.')
  })
})
