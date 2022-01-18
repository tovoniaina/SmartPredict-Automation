
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