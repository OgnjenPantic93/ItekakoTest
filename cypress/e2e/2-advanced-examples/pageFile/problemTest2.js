class ProblemTest_2{
    visitTest(){
        cy.visit('http://10.15.1.204:3000/questionaire')
        cy.url().should('include', 'questionaire')
        cy.get('.row').contains('Let our MindCook find something for you')
    }
    mindCook (data1, rezultat, option, suma, test, number) {
        cy.get(data1).click()
        cy.get(rezultat).invoke('text').then((result) => {
            if (result === option) {
                suma.broj += 1
                cy.log(suma.broj)
            }
            if (test){
                expect(suma.broj).be.equals(number)
            }
        })
    }
    chekingTheResult(result, option){
        cy.get(result).invoke('text').should('eq', option)
    }

    checkTheResult(data){
        cy.get('#readmymind').click()
        cy.get('#recHeader').invoke('text').should('eq', data)
    }

}

export default ProblemTest_2
