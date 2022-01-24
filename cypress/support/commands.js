
//Custom command to save and restore localStorage
let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});


//Custom command to login on SmartPredict
Cypress.Commands.add('loginSmartPredict', () => {
    cy.request({
        //url: "https://dev-gateway.smartpredict.cloud",
        url: "https://gateway.smartpredict.cloud",
        method: 'POST',
        body: {
            query: "mutation signIn($email: String!, $password: String!) {\n  signIn(input: {email: $email, password: $password}) {\n    accessToken\n    slug\n    confirmed\n    __typename\n  }\n}\n",
            variables: { email: "aristide@smartpredict.ai", password: "bq4X7kdy@@@" }
        }
    }).then(res => localStorage.setItem('token', res.body.data.signIn.accessToken));
    //cy.visit('http://dev-client-front.smartpredict.cloud')
    cy.visit('https://cloud.smartpredict.ai/')
})

//Custom command for getting list view

Cypress.Commands.add('listView', () => {
    cy.wait(2000)
    cy.get('#icon-list > .MuiIconButton-label > .MuiSvgIcon-root').click()
})

//Custom command to delete

Cypress.Commands.add('deleteProject', () => {

    cy.wait(2000)
    cy.get(':nth-child(1) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
    cy.wait(2000)
    cy.get('#menu-item-3 > .MuiTypography-root').click()
    cy.wait(2000)
    cy.get('#confirm > .MuiButton-label').click()
})

//Custom command for stopping webservice
Cypress.Commands.add('stopWebservice', () => {
    cy.wait(2000)
    cy.get(':nth-child(1) > #acions > .MuiGrid-root > .MuiSvgIcon-root').click()
    cy.wait(2000)
    cy.get('#menu-item-1 > .MuiTypography-root').click()
    cy.wait(2000)
    cy.get('#confirm > .MuiButton-label').click()
})

//Custom command for going to the Dashboard

Cypress.Commands.add('goToDashboard', () => {
    cy.wait(2000)
    cy.get('#dashboard > .MuiButtonBase-root > .MuiListItemIcon-root > .button-wrapper').click()
})

