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


describe('Testing Credit card fraud detection use case', () => {
    it('Looking for CCFD use case and click on it', () => {
        cy.wait(2000)
        cy.get(':nth-child(3) > .MuiGrid-spacing-xs-2 > :nth-child(2) > #use-case-item > .MuiButtonBase-root').scrollIntoView().click() //Scrollview until CCFD appears and click on it
        cy.wait(3000)
    });

    it('Click on complete all steps with an example', () => {
        //cy.get(':nth-child(4) > #action-button').click() //Click on complete all steps with an example
        cy.xpath('/html/body/div[1]/div[2]/main/div/div[1]/div/div[3]/div[2]/div/div/div/div/div/div/div/div[2]/div/div[2]/div[2]/div/div[4]/button/span').click()

        cy.wait(2000)
    });

    it('Click on Continue button', () => {
        cy.get(':nth-child(2) > .MuiGrid-root > #action-button > .MuiButton-label').click()
        cy.wait(2000)
    });

    it('Choose resources templates', () => {
        cy.spvmFree()
        cy.wait(3000)
    });

    it('Run the project', () => {
        cy.get('#upgrade-to-premium > .MuiButton-label').click() //Run project
    });

    it('Wait for running the CCFD project ', () => {
        cy.wait(75000)
    });

    it('It checks if the run of the project is finished', () => {
        cy.get('#done-description > :nth-child(2) > .MuiTypography-root').contains("All set! Now let's see the results in the Predict Space").should('be.visible') //Should have this setence to validate this step
    });

    it('Click to see the second dialog on predict space', () => {
        cy.wait(3000)
        cy.get('.MuiButton-label > .MuiGrid-root').click() //Click to see the second dialog on predict space
    });

    it('Clicking the button before sending request', () => {
        cy.wait(2000)
        cy.get('.MuiButton-label > .MuiGrid-container > :nth-child(1)').click() //Running default request on predict space
        cy.wait(15000)
    });

    // it('Running the default request on predict space', () => {
    //     cy.wait(15000)
    // });

    it('Check if the output is well displayed', () => {
        cy.wait(3000)
        //cy.get('.jss1104').contains('index').should('be.visible') //should have index word visible to validate this step.
        cy.xpath('//*[@id="dataset-preview-table"]/div[1]/div/div[1]/div/div/div/span[2]').contains('VERDICT').should('be.visible')
        cy.wait(2000)
    });


})


describe('CCFD project running finished, Go to dashboard', () => {
    it('Go to the dashboard', () => {
        cy.goToDashboard()
    });

})

describe('Getting list view', () => {
    it('Go to the list view', () => {
        cy.listView()
    });
})


describe('Go to stop webservice', () => {
    it('Stop the webservice', () => {
        cy.stopWebservice()
    });
})


describe('Delete the project', () => {
    it('Delete permanently the project', () => {
        cy.wait(2000)
        cy.deleteProject()
    });
})