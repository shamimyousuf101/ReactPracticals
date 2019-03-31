describe('Save Promotion',() => {

    it('Submit button is disabled if not all values are not entered', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.link__edit').click();
        cy.get('.banner > h3').should('contain', 'SavePromotion')
        cy.get('.promotion-toolbar__button-save').should('be.disabled');

        cy.get(':nth-child(2) > :nth-child(2) > input').check();
        cy.get('.promotion-toolbar__button-save').should('be.disabled');

        cy.get(':nth-child(3) > :nth-child(2) > input').check();
        cy.get('.promotion-toolbar__button-save').should('be.disabled');

        cy.get('.promotionDetailsForm > :nth-child(4) > input').type('new url');
        cy.get('.promotion-toolbar__button-save').should('be.disabled');

        cy.get('.promotionDetailsForm > :nth-child(5) > input').type('promo new name');
        cy.get('.promotion-toolbar__button-save').should('be.enabled');

        cy.get('.NewPromotionTitle').contains('promo new name');
        cy.get('.confirmationbox').should('not.be.visible');

        cy.get('.promotion-toolbar__button-save').click();
        cy.get('.confirmationbox').should('be.visible');

        cy.get('.cancelBtn').click();
        cy.get('.confirmationbox').should('not.be.visible');

        cy.get('.promotion-toolbar__button-save').click();
        cy.get('.confirmationbox').should('be.visible');

        cy.get('.confirmBtn').click();
        cy.get('.confirmationbox').should('not.be.visible');
    })
    
});