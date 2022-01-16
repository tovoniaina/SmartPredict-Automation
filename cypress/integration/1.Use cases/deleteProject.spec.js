//Restore local Storage
beforeEach(() => {
    cy.restoreLocalStorage();
});

//Save local Storage
afterEach(() => {
    cy.saveLocalStorage();
});


//Custom command to login on SmartPredict

describe('Login into SP platform without UI', () => {

    it('Send request to the SPs gateway and visit the plateform homepage', () => {
        cy.loginSmartPredict()
        cy.wait(9000)
    });
})

describe('Delete project', () => {
    it('switch to project lists', () => {
        cy.get('#dashboard-tab-project-tab > .MuiTab-wrapper').click()
        cy.wait(2000)
    });

    it('switch list view', () => {
        cy.get('#icon-list > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.wait(2000)
    });
    it('Test delete', () => {
        var genArr = Array.from({ length: 500 }, (v, k) => k + 1)
        cy.wrap(genArr).each((index) => {
            cy.get(':nth-child(1) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
            cy.wait(1000)
            cy.get('#menu-item-3 > .MuiTypography-root').click()
            cy.wait(1000)
            cy.get('#confirm > .MuiButton-label').click()
            cy.wait(1000)


            cy.get(':nth-child(2) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
            cy.wait(1000)
            cy.get('#menu-item-3 > .MuiTypography-root').click()
            cy.wait(1000)
            cy.get('#confirm > .MuiButton-label').click()
            cy.wait(1000)


            cy.get(':nth-child(3) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
            cy.wait(1000)
            cy.get('#menu-item-3 > .MuiTypography-root').click()
            cy.wait(1000)
            cy.get('#confirm > .MuiButton-label').click()
            cy.wait(1000)


            cy.get(':nth-child(4) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
            cy.wait(1000)
            cy.get('#menu-item-3 > .MuiTypography-root').click()
            cy.wait(1000)
            cy.get('#confirm > .MuiButton-label').click()
            cy.wait(1000)

            cy.get(':nth-child(5) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
            cy.wait(1000)
            cy.get('#menu-item-3 > .MuiTypography-root').click()
            cy.wait(1000)
            cy.get('#confirm > .MuiButton-label').click()
            cy.wait(1000)

            cy.get(':nth-child(6) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
            cy.wait(1000)
            cy.get('#menu-item-3 > .MuiTypography-root').click()
            cy.wait(1000)
            cy.get('#confirm > .MuiButton-label').click()
            cy.wait(1000)

            cy.get(':nth-child(7) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
            cy.wait(1000)
            cy.get('#menu-item-3 > .MuiTypography-root').click()
            cy.wait(1000)
            cy.get('#confirm > .MuiButton-label').click()
            cy.wait(1000)

            cy.get(':nth-child(8) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
            cy.wait(1000)
            cy.get('#menu-item-3 > .MuiTypography-root').click()
            cy.wait(1000)
            cy.get('#confirm > .MuiButton-label').click()
            cy.wait(11000)
        })
    });


})