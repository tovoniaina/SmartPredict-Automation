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

describe('Running Image classification use case project', () => {
    it('Click the image classification use case project card', () => {
        cy.get(':nth-child(2) > .MuiGrid-container > :nth-child(2) > #use-case-item > .MuiButtonBase-root > .MuiCardContent-root').click()
        cy.wait(5000)
    });

    it('Click to continue button for the next step', () => {
        cy.get('#action-button > .MuiButton-label').click()
        cy.wait(3000)
    });

    it('Choose resources templates', () => {
        cy.get('#SPVM2 > .MuiFormControlLabel-label > .MuiGrid-root > .MuiTypography-root').click() //Choosing SPVM2 to run the project
        cy.wait(2000)
    });

    it('Click the RUN button', () => {
        cy.get('#upgrade-to-premium > .MuiButton-label').click()
        cy.wait(6000)
    });
})


describe('Navigation through AutoPredict dialog', () => {
    it('Check if the Deploying the flowchart as webservice is finished', () => {
        cy.get('#done-description > :nth-child(2) > .MuiTypography-root').contains("All set! Now let's see the results in the Predict Space").should('be.visible')
        cy.wait(2000)
    });

    it('Go to the second dialog of autopredict', () => {
        cy.get('.MuiButton-label > .MuiGrid-root').click()
        cy.wait(4000)
    });

    it('Run the default request on predict space', () => {
        cy.get('.MuiButton-label > .MuiGrid-container > :nth-child(1)').click()
        cy.wait(10000)
    });
})


describe('Checking the result on predict space', () => {
    it('Check if the output has been displayed', () => {
        cy.get('.jsoneditor-expand-all').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > :nth-child(1) > .jsoneditor-values > tbody > tr > :nth-child(2) > .jsoneditor-field').contains('Cat').should('be.visible')
        cy.wait(2000)
    });
})

describe('Go to the monitor space to stop webservice', () => {
    it('Navigate to the monitor space to stop webservice', () => {
        cy.get('#monitor > .MuiTab-wrapper').click()
        cy.wait(2000)
        cy.get('#stop-web-service > .MuiSvgIcon-root').click()
        cy.wait(4000)
    });

    it('Check if the webservice is really off', () => {
        cy.get('#deploying-state > .MuiTypography-root').contains('Web Service is Off').should('be.visible')
        cy.wait(1000)
    });
})

describe('Go to the dashboard and the project has been ran successfully', () => {
    it('Go to dashboard', () => {
        cy.get('#dashboard > .MuiButtonBase-root > .MuiListItemIcon-root > .button-wrapper').click()
        cy.wait(2000)
    });
})

describe('Delete the project', () => {
    it('switch to project lists', () => {
        cy.get('#dashboard-tab-project-tab > .MuiTab-wrapper').click()
        cy.wait(2000)
    });

    it('switch list view', () => {
        cy.get('#icon-list > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.wait(2000)
    });

    it('delete the project permanently', () => {
        cy.get(':nth-child(1) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
        cy.wait(1000)
        cy.get('#menu-item-3 > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('#confirm > .MuiButton-label').click()
        cy.wait(1000)
    });

})