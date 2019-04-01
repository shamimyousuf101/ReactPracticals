describe('Home Page', () => {
    it('should visit promotion builder app', () => {
        cy.visit('http://localhost:3000/');
    })

    it('should have the title as Promotion Builder', () => {
        cy.title().should('include', 'Promotion Builder')
    })

    describe('Banner', () => {
        it('should display a header as Promotion Manager', () => {
            cy.visit('http://localhost:3000/');
            cy.get('.banner > h1').should('be.visible')
            cy.get('.banner > h1').should('contain', 'Promotion Manager')
        })

        it('should display a sub header as Promotion Manager', () => {
            cy.visit('http://localhost:3000/');
            cy.get('.banner > h1').should('be.visible')
            cy.get('.banner > h3').should('contain', 'Search')
        })
    })

    describe('Navigation', () => {
        it('should contain Search Navigation', () => {
            cy.get('.link__search > a').should('be.visible');
            cy.get('.link__search > a').should('have.text', "Search");
        })

        it('should contain Asset Manager Navigation', () => {
            cy.get('.link__asset > a').should('be.visible');
            cy.get('.link__asset > a').should('have.text', "Asset Manager");
        })

        it('should contain Creat / Edit Navigation', () => {
            cy.get('.link__edit > a').should('be.visible');
            cy.get('.link__edit > a').should('have.text', "Create / Edit");
        })
    })
})