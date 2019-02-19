describe('Navigation',() => {


    it('Asset Manager should take us to Asset Manager Page', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.upload__link > a').click();
        cy.get('.banner > h3').should('contain', 'AssetManager')
        
    })

    it('Create/Edit should take us to Save Promotion page', () => {
        cy.get('.config__link').click();
        cy.get('.banner > h3').should('contain', 'SavePromotion')
    })

    it('Search should take us to Search page when not in Home Page', () => {
        cy.get('.search__link').click()
        cy.get('.banner > h3').should('contain', 'Search')
    })
    
});