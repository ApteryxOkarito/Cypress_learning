describe('Test suite - conjunto de pruebas', () => {

    it('validar página de inicio', () => {

        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('.active > img').should("be.visible")
        cy.get('.active > .custom > h4').contains("Online Banking")
    })

    it('Prueba E2E - transferencia de fondos', () => {

        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(0)
        cy.get('#tf_toAccountId').select(4)
        cy.get('#tf_amount').type("100")
        cy.get('#tf_description').type("Prueba transferencia fondos")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains("You successfully submitted your transaction.")
    })

})