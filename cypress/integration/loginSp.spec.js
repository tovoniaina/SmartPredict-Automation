//Restore local Storage
beforeEach(() => {
    cy.restoreLocalStorage();
});

//Save local Storage
afterEach(() => {
    cy.saveLocalStorage();
});


describe('Login into SP platform without UI', () => {

    it('Send requesto to the gateway of SP', () => {


        cy.request({
            url: "https://dev-gateway.smartpredict.cloud",
            method: 'POST',
            body: {
                query: "mutation signIn($email: String!, $password: String!) {\n  signIn(input: {email: $email, password: $password}) {\n    accessToken\n    slug\n    confirmed\n    __typename\n  }\n}\n",
                variables: { email: "aristide@smartpredict.ai", password: "bq4X7kdy@@" }
            }
        }).then(res => localStorage.setItem('token', res.body.data.signIn.accessToken));
        cy.visit('https://dev-client-front.smartpredict.cloud/')
    });
})


describe('Navigate throught the SP Platform', () => {

    it('Go to the team of test', () => {
        cy.wait(15000)
        cy.get('#demo-simple-select-outlined > .MuiBox-root').click() //manokatra anle liste déroulate misy team
        cy.wait(3000)
        cy.get('[data-value="611c9dcd493e120010bc4e9f"] > .MuiBox-root > .jss60').click() //misafidy anle team hiasana
        cy.wait(3000)
    });

    it('Switch to explore tab', () => {

        cy.get('#dashboard-tab-explore-tab').click() // switch to explore tab
        cy.wait(3000)
    });



})


describe('Ready to test Speech to text use case', () => {

    it('Looking for Speech to text use case and click on it', () => {
        cy.get(':nth-child(5) > .MuiGrid-container > :nth-child(2) > #use-case-item > .MuiButtonBase-root > .MuiCardContent-root').scrollIntoView().click() //Scrollview until Speech to text and click on it
        cy.wait(5000)
        cy.get('#action-button > .MuiButton-label').click() //Click oncontinue button
    });

    it('Choose resources templates and run the project', () => {
        cy.get('#SPVM2 > .MuiFormControlLabel-label > .MuiGrid-root > .MuiTypography-root').click() //Choose SPVM 
        cy.wait(3000)
        cy.get('#upgrade-to-premium > .MuiButton-label').click() //Run project
        cy.wait(11000)
    });

    it('Click to see the second dialog on predict space', () => {
        cy.get('.MuiButton-label > .MuiGrid-root').click() //Click to see the second dialog on predict space
        cy.wait(3000)
    });

    it('Running default request on predict space', () => {
        cy.get('.MuiButton-label > .MuiGrid-container > :nth-child(1)').click() //Running default request on predict space
        cy.wait(20000)
    });

    it('Go to the monitor space to stop webservice', () => {
        cy.get('#monitor > .MuiTab-wrapper').click() //Go to the monitor space to stop webservice
        cy.wait(2000)
        cy.get('#stop-web-service > .MuiSvgIcon-root').click()
        cy.wait(5000)
    });

    it('Go to Dashboard and the test finished with success', () => {
        cy.get('#dashboard > .MuiButtonBase-root > .MuiListItemIcon-root > .button-wrapper').click() //Go to Dashboard and the test finished with success
    });
})