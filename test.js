describe('Page.html', () => {
  beforeEach(() => {
    cy.visit('page.html')
  })

  it('should display the navbar', () => {
    cy.get('.navbar').should('be.visible')
  })

  it('should have the correct navbar links', () => {
    cy.get('.navbar a').should('have.length', 5)
    cy.get('.navbar a').eq(0).should('have.text', 'Home')
    cy.get('.navbar a').eq(1).should('have.text', 'About')
    cy.get('.navbar a').eq(2).should('have.text', 'Services')
    cy.get('.navbar a').eq(3).should('have.text', 'Portfolio')
    cy.get('.navbar a').eq(4).should('have.text', 'Contact')
  })

  it('should display the card', () => {
    cy.get('.card').should('be.visible')
  })

  it('should have the correct card content', () => {
    cy.get('.card h1').should('have.text', 'Welcome!')
    cy.get('.card p').should('have.text', 'This is a simple card in the center of the page.')
  })
})
