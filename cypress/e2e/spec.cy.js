describe('Url Shortener', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'urls'
    }).as('getUrls')
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'newUrl'
    }).as('postUrl')
    .visit('http://localhost:3000/')
  })
  
  it('Displays homepage', () => {
    cy.get('h1').contains('URL Shortener')
    .get('input[name="title"]').should('have.value', '')
    .get('input[name="urlToShorten"]').should('have.value', '')
    .get('button').contains('Shorten Please!')
    .get('.url-container').children().should('have.length', 2)
    .get('.url').first().contains('h3', 'Awesome photo')
    .get('.url').first().contains('a', 'http://localhost:3001/useshorturl/1')
    .get('.url').first().contains('p', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    .get('.url').last().contains('h3', 'shopping')
    .get('.url').last().contains('a', 'http://localhost:3001/useshorturl/2')
    .get('.url').last().contains('p', 'https://youngdays.com/products/saint-james-onesie?variant=44242126930160&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745DlnoARAsD2V9ZJ1YZ5YajquEz0lK2AAwWEuHXU3lT6-KQ5laAComwaAn4qEALw_wcB')
  })

  it('Gives feedback if attempt made to submit incomplete form', () => {
    cy.get('button').click()
    .get('h2').contains('Please complete the form')
  })

  it('Accepts and displays user submissions', () => {
    cy.get('input[name="title"]').type('hannah anderson').should('have.value', 'hannah anderson')
    .get('input[name="urlToShorten"]').type('https://www.hannaandersson.com/baby-clothes/?utm_source=google&utm_medium=cpc&utm_campaign=19634079300&utm_content=&utm_term=&gclid=Cj0KCQjwlZixBhCoARIsAIC745CTSQ3Kg3H5aWJsFSlTDJMYQNASoO-rGUJKf9Mp50nfseGfe62gURQaAtNIEALw_wcB').should('have.value', 'https://www.hannaandersson.com/baby-clothes/?utm_source=google&utm_medium=cpc&utm_campaign=19634079300&utm_content=&utm_term=&gclid=Cj0KCQjwlZixBhCoARIsAIC745CTSQ3Kg3H5aWJsFSlTDJMYQNASoO-rGUJKf9Mp50nfseGfe62gURQaAtNIEALw_wcB')
    .get('button').click()
    .get('.url-container').children().should('have.length', 3)
    .get('.url').first().contains('h3', 'Awesome photo')
    .get('.url').first().contains('a', 'http://localhost:3001/useshorturl/1')
    .get('.url').first().contains('p', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    .get('.url').last().contains('h3', 'hannah anderson')
    .get('.url').last().contains('a', 'http://localhost:3001/useshorturl/3')
    .get('.url').last().contains('p', 'https://www.hannaandersson.com/baby-clothes/?utm_source=google&utm_medium=cpc&utm_campaign=19634079300&utm_content=&utm_term=&gclid=Cj0KCQjwlZixBhCoARIsAIC745CTSQ3Kg3H5aWJsFSlTDJMYQNASoO-rGUJKf9Mp50nfseGfe62gURQaAtNIEALw_wcB')
  })
})