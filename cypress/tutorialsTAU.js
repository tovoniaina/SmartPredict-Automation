
//cy.should('contains.text','soratra')

// cy
// .get('[data-cy=task]')
// .should( item => {
//   if (item.length !== 3) {
//     throw new Error('Not enough elements!')
//   }
//   expect(item[0]).to.contain.text('bread')
//   expect(item[1]).to.contain.text('milk')
// })

// })


// clic on hover element, we can use .clic({force=true}) also
// cy
// .get('[data-cy=star]')
// .invoke('show')
// .click()


//mampiseho ny element caché mba ahafahana manao action
// cy
//     .get('[data-cy="board-item"]')
//     .trigger('mouseover')


// it('Changing the DOM', () => {

//   cy
//     .get('[data-cy="board-item"]')
//     .trigger('mouseover')

//   cy
//     .get('[data-cy=star]')
//     .should('be.visible')

//   cy
//     .get('[data-cy="board-item"]')
//     .trigger('mouseout')

//   cy
//     .get('[data-cy=star]')
//     .should('not.be.visible')

// })