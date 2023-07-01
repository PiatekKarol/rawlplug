import readySearch from "../support/page-object/readSearch";

let elementCount = 0;
let textToCheck = "Gwoździe gładkie 3,1x90 mm + 2 gazy do gwoździarki WW90CH i WW90II - opakowania kartonowe - 2200 szt."
let textCounter = 0

describe('E2E - Product Search', () => {

    it('Product search by name and number - rawlplug.com', () => {
        cy.visit('/');

        readySearch.markAndClear();
        readySearch.search.type(textToCheck).type('{enter}');
        cy.wait(3000)

        cy.get('[data-el="ui-product-item"]')
            .its('length')
            .should('be.gt',0)
            .then((count) => {
                elementCount = count;
                cy.log(`Liczba elementów: ${elementCount}`);
            })
        
         cy.get('[data-el="ui-product-item"]')
            .contains(textToCheck)
            .then(($element) => {
                textCounter = $element.length;
                expect(textCounter).to.equal(elementCount);
            })    
    })

}) 


   


