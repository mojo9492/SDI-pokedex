/// <reference types="cypress" />
describe("Home page", () => {
  beforeEach(() => {
      cy.visit('/')
  })

  it("shows the banner, enter and about buttons on the home page", () => {
    cy.get('.banner-message');
    cy.get('[href="/pokedex"] > button');
    cy.get('[href="/about"] > button')
  })

  it('shows the about page when the about button is clicked', () => {
    const aboutParagraph = 'This app was created for the kids who loved showing off their binders full of pokemon cards'
    cy.get('[href="/about"] > button').click()
    cy.findByText(/about the pokedex project/i)
    cy.get('[href="/pokedex"] > button');
    cy.findByText(aboutParagraph);
    cy.get('footer');
  })

  it('show the pokedex app when the enter button is clicked', () => {
    cy.get('[href="/pokedex"] > button').click();
    cy.findByText(/Pokedex/);
    cy.get('.top-bar');
    cy.get('.poke-collection');
  })
})
