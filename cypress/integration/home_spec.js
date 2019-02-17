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
})