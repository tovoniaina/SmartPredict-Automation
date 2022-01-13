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
    });
})


describe('Navigate throught the SP Platform', () => {

    //choose the team in which we will test 
    it('Go to the team of test', () => {
        cy.wait(15000)
        cy.get('#demo-simple-select-outlined > .MuiBox-root').click() //Open the drop-down list and choose the team
        cy.wait(3000)
        cy.get('[data-value="611c9dcd493e120010bc4e9f"] > .MuiBox-root > .jss60').click() //Choose team to work with
        cy.wait(3000)
    });

    it('Switch to explore tab', () => {

        cy.get('#dashboard-tab-explore-tab').click() // switch to explore tab
        cy.wait(3000)
    });
})


describe('Testing Credit card fraud detection use case', () => {
    it('Looking for CCFD use case and click on it', () => {
        cy.get(':nth-child(3) > .MuiGrid-spacing-xs-2 > :nth-child(2) > #use-case-item > .MuiButtonBase-root').scrollIntoView().click() //Scrollview until CCFD appears and click on it
        cy.wait(5000)
        cy.get(':nth-child(4) > #action-button').click() //Click on complete all steps with an example
    });
})