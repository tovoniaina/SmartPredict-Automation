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
        cy.wait(13000)
    });
})


describe('Testing Credit card fraud detection use case', () => {
    it('Looking for CCFD use case and click on it', () => {
        cy.get(':nth-child(3) > .MuiGrid-spacing-xs-2 > :nth-child(2) > #use-case-item > .MuiButtonBase-root').scrollIntoView().click() //Scrollview until CCFD appears and click on it
        cy.wait(3000)
    });

    it('Click on complete all steps with an example', () => {
        cy.get(':nth-child(4) > #action-button').click() //Click on complete all steps with an example
        cy.wait(2000)
    });

    it('Click on Continue button', () => {
        cy.get(':nth-child(2) > .MuiGrid-root > #action-button > .MuiButton-label').click()
        cy.wait(2000)
    });

    it('Choose resources templates', () => {
        cy.get('#SPVM3 > .MuiFormControlLabel-label > .MuiGrid-root > .MuiTypography-root').click() //Choose SPVM 
        cy.wait(3000)
    });

    it('Run the project', () => {
        cy.get('#upgrade-to-premium > .MuiButton-label').click() //Run project
        cy.wait(70000)
    });

    it('It checks if the run of the project is finished', () => {
        cy.get('#done-description > :nth-child(2) > .MuiTypography-root').contains("All set! Now let's see the results in the Predict Space").should('be.visible') //Should have this setence to validate this step
        cy.wait(2000)
    });

    it('Click to see the second dialog on predict space', () => {
        cy.get('.MuiButton-label > .MuiGrid-root').click() //Click to see the second dialog on predict space
        cy.wait(2000)
    });

    it('Running default request on predict space', () => {
        cy.get('.MuiButton-label > .MuiGrid-container > :nth-child(1)').click() //Running default request on predict space
        cy.wait(15000)
    });

    it('Check if the output is well displayed', () => {
        cy.wait(5000)
        cy.get('.jss1104').contains('index').should('be.visible') //should have index word visible to validate this step.
        cy.wait(2000)
    });


})


describe('CCFD project running finished, Go to dashboard', () => {
    it('Go to the dashboard', () => {
        cy.get('#dashboard > .MuiButtonBase-root > .MuiListItemIcon-root > .button-wrapper').click() //Go to dashboard
        cy.wait(3000)
    });

})


describe('Go to stop webservice', () => {
    it('Go to the list view to stop webservice', () => {
        cy.get('#icon-list').click() //Getting the list view
        cy.wait(2000)
    });


    it('Clic to dotted menu on the right', () => {
        cy.get(':nth-child(1) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click() //Clic to dotted menu on the right
        cy.wait(2000)
    });

    it('Click to stop WS', () => {
        cy.get('#menu-item-1 > .MuiTypography-root').click() //Click to stop WS
        cy.wait(2000)
    });

    it('Confirm to stop WS', () => {
        cy.get('#confirm > .MuiButton-label').click() //Confirm to stop WS
        cy.wait(5000)
    });
})




describe('Delete the project', () => {
    it('delete the project permanently', () => {
        cy.get(':nth-child(1) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
        cy.wait(2000)
        cy.get('#menu-item-3 > .MuiTypography-root').click()
        cy.wait(2000)
        cy.get('#confirm > .MuiButton-label').click()
        cy.wait(2000)
    });

})