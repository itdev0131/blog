describe('Article Show Page Test', () => {
  beforeEach(() => {})

  it('visit article show page', () => {
    cy.visit('/articles/2')

    cy.contains('Article')
  })

  it('leave a new comment', () => {
    cy.wait(1000)

    cy.contains('Leave Comment').click()

    cy.get('.ant-drawer textarea.ant-input').type('comment 001')
    cy.get('.ant-drawer button').click()

    cy.get('.ant-drawer-mask').click()
  })

  it('remove exiting comment', () => {
    cy.get('.comments-list > :nth-child(4) button').eq(1).click()
    cy.get('.ant-popover button').eq(0).click()

    cy.get('.comments-list > :nth-child(4) button').eq(1).click()
    cy.get('.ant-popover button').eq(1).click()
  })

  it('edit exiting comment', () => {
    cy.get('.comments-list > :nth-child(4) button').eq(0).click()

    cy.get('.ant-drawer textarea.ant-input').type('description 001')
    cy.get('.ant-drawer button').click()

    cy.get('.ant-drawer-mask').click()
  })
})
