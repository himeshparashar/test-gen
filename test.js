describe('Page.html', () => {
  beforeEach(() => {
    cy.visit('page.html')
  })

  it('should have a navbar with links', () => {
    cy.get('.navbar a').should('have.length', 5)
    cy.get('.navbar a').eq(0).should('contain', 'Home')
    cy.get('.navbar a').eq(1).should('contain', 'About')
    cy.get('.navbar a').eq(2).should('contain', 'Services')
    cy.get('.navbar a').eq(3).should('contain', 'Portfolio')
    cy.get('.navbar a').eq(4).should('contain', 'Contact')
  })

  it('should have a card with title and description', () => {
    cy.get('.card h1').should('contain', 'Welcome!')
    cy.get('.card p').should('contain', 'This is a simple card in the center of the page.')
  })
})
