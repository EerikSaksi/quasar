/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('localhost:9000');
  });

  it('displays two todo items by default', () => {
    cy.get('input[value="Sample Todo"]').should('have.length', 1);
    cy.get('input[value="Another Todo"]').should('have.length', 1);
  });

  it('can add new todo items', () => {
    const newItem = 'Complete todo app';

    cy.get('input[aria-label="New Todo"').type(`${newItem}{enter}`);

    cy.get('input[value="Complete todo app"]').should('have.length', 1);
  });

  it('can check off an item as completed', () => {
    // get the card containing an input with "new todo" as its value
    cy.contains('Completed Todos (0)').should('exist');
    cy.get('input[value="Sample Todo"]')
      .get('button')
      .filter((index, button) => button.innerText === 'check')
      .first()
      .click();
    cy.contains('Completed Todos (1)').should('exist');
  });

  it('can delete item', () => {
    // get the card containing an input with "new todo" as its value
    cy.contains('Completed Todos (0)').should('exist');
    cy.get('input[value="Another Todo"]')
      .get('button')
      .filter((index, button) => button.innerText === 'close')
      .first()
      .click();
    cy.contains('Completed Todos (0)').should('exist');
  });

  it('can edit item', () => {
    // get the card containing an input with "new todo" as its value
    cy.get('input[value="Another Todo"]').clear().type('Edited Todo');

    cy.get('input[value="Edited Todo"]')
      .get('button')
      .filter((index, button) => button.innerText === 'check')
      .last()
      .click();
    cy.contains('Edited Todo').should('exist');
  });
});
