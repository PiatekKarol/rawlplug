class readySearch{
    get search() {
        return cy.get('#search-input');
    }
    markAndClear(){
        this.search.clear()
    }
}

export default new readySearch();