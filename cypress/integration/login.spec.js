/// <reference-types = "Cypress" />


describe('login test suite', () => {
    
    it('can login with right username & password', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test=username').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').should('contain','Add to cart')
    });

    it('cannot login with a wrong password', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test=username').type('standard_user')
        cy.get('[data-test=password]').type('abadpassword')
        cy.get('[data-test=login-button').click()

        cy.get('[data-test=error]').should('contain','password do not match any user in this service')
        
    });

    it('cannot login with a locked out account', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test=username').type('locked_out_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button').click()

        cy.get('[data-test=error]').should('contain','Sorry, this user has been locked out')
        
    });

    it('login with a problem user', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test=username').type('problem_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button').click()

        cy.location('pathname').should('equal', '/inventory.html')
        
    });
})

