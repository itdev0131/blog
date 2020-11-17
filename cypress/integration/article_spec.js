describe('Article List Page Test', () => {
  beforeEach(() => {})

  it('visit article list page', () => {
    cy.visit('/')

    cy.contains('Articles')
  })

  it('create a new article', () => {
    cy.wait(1000)

    cy.contains('Add').click()

    cy.get('.ant-drawer input.ant-input').type('artice 001')
    cy.get('.ant-drawer textarea.ant-input').type('description 001')
    cy.get('.ant-drawer button').click()

    cy.get('.ant-drawer-mask').click()
  })

  it('remove exiting article', () => {
    cy.get('.articles-list > :nth-child(4) button').eq(2).click()
    cy.get('.ant-popover button').eq(0).click()

    cy.get('.articles-list > :nth-child(4) button').eq(2).click()
    cy.get('.ant-popover button').eq(1).click()
  })

  it('edit exiting article', () => {
    cy.get('.articles-list > :nth-child(4) button').eq(1).click()

    cy.get('.ant-drawer input.ant-input').type('artice 001')
    cy.get('.ant-drawer textarea.ant-input').type('description 001')
    cy.get('.ant-drawer button').click()

    cy.get('.ant-drawer-mask').click()
  })

  it('show exiting article', () => {
    cy.get('.articles-list > :nth-child(2) button').eq(0).click()
    cy.url().should('include', '/articles/')
  })
})
