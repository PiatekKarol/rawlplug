describe('E2E - Home Page', () => {

  it('Should open home page - rawlplug.com', () => {
    cy.visit('/');

    cy.url().should('include','e.rawlplug.com');

    cy.title().should('include','Strona główna - Rawlplug');

    cy.get('span > a[class="text-black"]').should('have.length', 5);

  })

 
})