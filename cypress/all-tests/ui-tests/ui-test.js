import Chance from 'chance'

describe('Test fore reqres', () => {
    it('Positive: Create user', () => {
        cy.visit('https://store.google.com/us/?srp=/us/collection/accessories_wall?hl=en-US')
        cy.get('.header-search-icon').click()
        cy.get('input[aria-label="Search Google Store"]').type('Google Pixel Buds').submit()
        cy.get('a[href="/us/product/pixel_buds"]').should('exist')
    })



    it('Negative: POST request - login unsuccessful', () => {
        cy.request({method: 'POST', url:'/api/login',failOnStatusCode: false, body:{
                "email": "peter@klaven"}
        }).then(response => {
            expect(response.status).to.eq(400)
        })
    })
})

