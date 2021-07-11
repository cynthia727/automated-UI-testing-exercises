/// <reference-types = "Cypress" />


describe('login test suite', () => {
    
    it('happy path test', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test=username').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button').click()
    });

    it('a bad password', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test=username').type('standard_user')
        cy.get('[data-test=password]').type('abadpassword')
        cy.get('[data-test=login-button').click()

        cy.get('[data-test=error]').contains('password do not match any user in this service')
        
    })
})

