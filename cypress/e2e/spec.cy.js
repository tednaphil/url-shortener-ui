describe('Url Shortener', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'urls'
    }).as('getUrls')
    .visit('http://localhost:3000/')
  })
  
  
  it('Displays homepage', () => {
  })
})