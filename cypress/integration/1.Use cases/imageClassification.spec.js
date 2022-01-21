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

    it('Wait for loading after Login', () => {
        cy.wait(13000)
    });
})

describe('Running Image classification use case project', () => {
    it('Click the image classification use case project card', () => {
        cy.wait(5000)
        cy.get(':nth-child(2) > .MuiGrid-container > :nth-child(2) > #use-case-item > .MuiButtonBase-root > .MuiCardContent-root').click()
    });

    it('Click to continue button for the next step', () => {
        cy.wait(3000)
        cy.get('#action-button > .MuiButton-label').click()
    });

    it('Choose resources templates', () => {
        cy.wait(2000)
        cy.get('#SPVM2 > .MuiFormControlLabel-label > .MuiGrid-root > .MuiTypography-root').click() //Choosing SPVM2 to run the project 
    });

    it('Click the RUN button', () => {
        cy.wait(1000)
        cy.get('#upgrade-to-premium > .MuiButton-label').click()
    });

    it('Wait for running image classification project', () => {
        cy.wait(8000)
    });
})


describe('Navigation through AutoPredict dialog', () => {
    it('Check if the Deploying the flowchart as webservice is finished', () => {
        cy.wait(2000)
        cy.get('#done-description > :nth-child(2) > .MuiTypography-root').contains("All set! Now let's see the results in the Predict Space").should('be.visible')
    });

    it('Go to the second dialog of autopredict', () => {
        cy.wait(4000)
        cy.get('.MuiButton-label > .MuiGrid-root').click()
    });

    it('Run the default request on predict space', () => {
        cy.wait(2000)
        cy.get('.MuiButton-label > .MuiGrid-container > :nth-child(1)').click()
    });

    it('Waiting the default request', () => {
        cy.wait(10000)
    });
})


describe('Checking the result on predict space', () => {
    it('Check if the output has been displayed', () => {
        cy.wait(1000)
        cy.get('.jsoneditor-expand-all').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(1) > .jsoneditor-values > tbody > tr > :nth-child(2) > .jsoneditor-field').contains('Cat').should('be.visible')
    });
})

describe('Go to the monitor space to stop webservice', () => {
    it('Navigate to the monitor space to stop webservice', () => {
        cy.wait(2000)
        cy.get('#monitor > .MuiTab-wrapper').click()
        cy.wait(2000)
        cy.get('#stop-web-service > .MuiSvgIcon-root').click()
        cy.wait(6000)
    });

    it('Check if the webservice is really off', () => {
        cy.wait(3000)
        cy.get('#deploying-state > .MuiTypography-root').contains('Web Service is Off').should('be.visible')

    });
})

describe('Go to the dashboard and the project has been ran successfully', () => {
    it('Go to dashboard', () => {
        cy.goToDashboard()
    });
})

describe('Delete the project', () => {
    it('Delete permanently the project', () => {
        cy.wait(2000)
        cy.deleteProject()
    });
})