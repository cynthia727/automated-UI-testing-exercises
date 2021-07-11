/// <reference-types = "Cypress" />


describe('login test suite', () => {
    
    it('happy_path_test', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test=username').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button').click()
    });

    it('a_bad_password', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test=username').type('standard_user')
        cy.get('[data-test=password]').type('abadpassword')
        cy.get('[data-test=login-button').click()

        cy.get('[data-test=error]').contains('password do not match any user in this service')
        
    });

    it('a_locked-out_account', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test=username').type('locked_out_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button').click()

        cy.get('[data-test=error]').contains('Sorry, this user has been locked out')
        
    });

    it('a_problem_account', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test=username').type('problem_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button').click()

        cy.location('pathname').should('equal', '/inventory.html')
        
    });
})

