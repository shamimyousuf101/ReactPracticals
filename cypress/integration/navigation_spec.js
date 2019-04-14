describe('Navigation',() => {


    it('Asset Manager should take us to Asset Manager Page', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.link__asset > a').click();
        cy.get('.banner > h3').should('contain', 'AssetManager')
        
    })

    it('Create/Edit should take us to Save Promotion page', () => {
        cy.get('.link__create').click();
        cy.get('.banner > h3').should('contain', 'SavePromotion')
    })

    it('Search should take us to Search page when not in Home Page', () => {
        cy.get('.link__search').click()
        cy.get('.banner > h3').should('contain', 'Search')
    })
    
});