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


describe('Getting Visualization of iris dataset sample project', () => {
    it('Click on the sample project', () => {
        cy.wait(2000)
        cy.get('#sample-projects > :nth-child(1) > .MuiButtonBase-root').scrollIntoView().click()
    });

    it('Confirm the creation of sample project', () => {
        cy.wait(2000)
        cy.get('#create-project-button > .MuiButton-label').click()
    });
})


describe('Running the project in build space', () => {
    it('Click to the run the project icon', () => {
        cy.wait(10000)
        cy.get('#run > .MuiSvgIcon-root').click()
    });

    it('Choose SPVM to use', () => {
        cy.wait(3000)
        cy.get('#SPVM2 > .MuiFormControlLabel-label > .MuiGrid-root > .MuiTypography-root').click()
    });

    it('Click on the RUN button', () => {
        cy.wait(1000)
        cy.get('#upgrade-to-premium > .MuiButton-label').click()
    });

    it('Waiting for the run project', () => {
        cy.wait(35000)
    });

    it('Check if the run has been successfully', () => {
        cy.wait(2000)
        cy.xpath('//*[@id="running-state-tooltip"]/div/div/div/div[1]/div/div/p').contains('Success').should('be.visible')
    });
})


describe('Checking the result on data visualizer module', () => {
    it('It opens data visualizer module', () => {
        cy.wait(2000)
        cy.get('#instance-data-visualizer-1 > #instance-main > foreignobject > div > #option').click()
        cy.wait(1000)
        cy.get('#data-visualizer').click()
    });

    it('Check assertion on processing tab', () => {
        cy.wait(7000)
        cy.xpath('//*[@id="dataset-preview-table"]/div[1]/div/div[2]/div/div/span[5]').contains('virginica').should('be.visible')
    });

    // it('Move to the next tab "Profiling tab"', () => {
    //     cy.wait(2000)
    //     cy.xpath('//*[@id="gridContainer"]/div[1]/div/div/div/div/div/button[2]/span').click()
    // });

    // it('Check assertion on profiling tab', () => {
    //     cy.wait(7000)
    //     cy.get('.MuiGrid-root > iframe').contains('SmartPredict Data Profiling Report').should('be.visible')
    // });

    it('Move to the next tab "Visualization tab"', () => {
        cy.wait(2000)
        cy.get('[interactive-tour="switch-to-test-tab"] > .MuiTab-wrapper').click()
    });

    it('Check assertion on visualization tab', () => {
        cy.wait(1000)
        cy.get('.MuiGrid-grid-xs-9 > .MuiGrid-root > .MuiBox-root').contains('Coming soon').should('be.visible')
    });

    it('Close the dialog', () => {
        cy.wait(1000)
        cy.xpath('/html/body/div[8]/div[3]/div/header[1]/div/div[2]/button[2]/span').click()
    });
})

describe('Go to dashboard after finishing the test', () => {
    it('Go to the dashboard', () => {
        cy.goToDashboard()
    });

})