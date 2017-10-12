describe('Baninter Final User Login Test', function () {
    it('Login!', function () {
        cy.visit("http://localhost:8280/mcm-web-app/logout.jsp");

        /* Login Paso 1: usuario */
        cy.get('#j_username').type('userXXXXXXXXX', {
            force: true
        });
        cy.get('.dijitButton').should('contain', 'Continuar');
        cy.get('.dijitButton').click();

        /* Login Paso 2: usuario y password */
        cy.get('#j_password').type('XXXXXXXXX', {
            force: true
        });
        cy.get('#dijit_form_Button_2').click();

        /* Pregunta Secreta */
        cy.get('.dijitSelect').click();
        cy.get('#dijit_MenuItem_2').click();
        cy.get('#dijit_form_TextBox_0').type('montana', {
            force: true
        });
        cy.get('#dijit_form_Button_2').click();

        /* Omitir registro de maquina */
        cy.get('#dijit_form_Button_1').click();

        /* Link transferencias */
        cy.get('#ec_fisa_widget_Link_2_anchor').click();

        /* Seleccion datos transferencia */
        cy.get('#ec_fisa_widget_TextBox_1_textBox').type('1', {
            force: true
        });
        cy.get('#dijit_form_NumberTextBox_1').type('1', {
            force: true
        });
        cy.get('#dijit_form_Select_1').click();
        cy.get('#dijit_MenuItem_6').click();
        cy.get('#dijit_form_Button_1').click();

        /* Pantalla de confirmacion */
        cy.get('#ec_fisa_widget_OutputTextComplement_0_textBox').should('contain', '116970');
        cy.get('#ec_fisa_widget_OutputText_0_complement').should('contain', '125511');
        cy.get('#dijit_form_Button_4').click();
    })
})
