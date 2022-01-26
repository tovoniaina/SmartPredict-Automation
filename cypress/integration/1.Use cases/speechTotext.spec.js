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


describe('Run Speech to Text use case', () => {
    it('Click on Speech to text use case', () => {
        cy.get(':nth-child(5) > .MuiGrid-container > :nth-child(1) > #use-case-item > .MuiButtonBase-root > .MuiCardContent-root').click()
    });

    it('Click on the continue button', () => {
        cy.wait(3000)
        cy.get('#action-button > .MuiButton-label').click()
    });

    it('Choose a resources templates', () => {
        cy.wait(2000)
        cy.spvmFree()
    });

    it('Click on RUN button', () => {
        cy.wait(1000)
        cy.get('#upgrade-to-premium > .MuiButton-label').click()
    });

    it('Running the Speech to text use case', () => {
        cy.wait(7000)
    });

    it('Verify if the project has been ran successfully', () => {
        cy.wait(2000)
        cy.get('#done-description > :nth-child(2) > .MuiTypography-root').contains("All set! Now let's see the results in the Predict Space.").should('be.visible')
    });

    it('Go to the second autopredict dialog', () => {
        cy.wait(2000)
        cy.get('.MuiButton-label > .MuiGrid-root').click()
    });

    it('Run de default request', () => {
        cy.wait(2000)
        cy.get('.MuiButton-label > .MuiGrid-container > :nth-child(1)').click()
    });

    it('Loading, please be patient, output result will be displayed...', () => {
        cy.wait(30000)
    });
})



describe('Check if we have the expected output', () => {
    it('Expand all Json file', () => {
        cy.get('.jsoneditor-expand-all').click()
    });

    it('Check if some word exists to validate this step', () => {
        cy.wait(3000)
        cy.get(':nth-child(4) > :nth-child(1) > .jsoneditor-values > tbody > tr > :nth-child(4) > .jsoneditor-value').contains('Thank you for choosing the Olympus Dictation Management System.').should('be.visible')
    });
})



describe('Go to the dashboard', () => {

    it('Go to the dashboard', () => {
        cy.goToDashboard()
    });
})

describe('Getting list view', () => {
    it('Go to the list view', () => {
        cy.listView()
    });
})


describe('Stopping the webservice', () => {
    it('Stop the Webservice', () => {
        cy.stopWebservice()
    });
})



describe('Delete the project', () => {
    it('Delete permanently the project', () => {
        cy.deleteProject()
    });
})