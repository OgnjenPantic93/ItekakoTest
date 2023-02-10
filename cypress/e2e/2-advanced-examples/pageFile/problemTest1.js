/// reference types="cypress" />
class ProblemTest_1 {
    visitTest() {
        cy.visit('http://10.15.1.204:3000/')
        cy.title().should('eq', 'QA Exam Kitchen')
    }
    toThePage1(){
        cy.get('.nav-link').contains('Problem 1 Organize').click()
        cy.url().should('include', 'reserve')
    }

    checkingColors(){
        cy.get(".bp").should('have.css', 'color','rgb(0, 98, 204)')
        cy.get(".org").should('have.css', 'color','rgb(28, 116, 48)')
    }
    informationOne(name, organizator, age){
        cy.get("input[placeholder='Who is organizing birthday']").type(organizator)
        cy.get("input[placeholder='Who is having birthday']").type(name)
        cy.get("#age").type(age + '{enter}')
    }

    informationTwo(date){
        cy.get('#date').type("2023-12-24")
        cy.get('#time').type(date)
        cy.get('#persons').select('11-20')


    }

    areYouAlergic(areYou){

        if(areYou === "Yes"){
            cy.get('[type="radio"]').first().check().should('be.checked')
        }
        else if(areYou === 'No')
        {cy.get('[value="No"]').check().should('be.checked')
        }

        else if(areYou === 'Maybe')
        {cy.get('#alg_m').check().should('be.checked')
        }
    }

    alergies(){
        cy.get("input[type='checkbox']").check(['Wallnuts', 'Fish', 'Shrimp', 'Chestnuts', 'Meat', 'Gluten'])
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("input[type='checkbox']").uncheck(['Wallnuts', 'Fish', 'Shrimp', 'Chestnuts', 'Meat', 'Gluten'])
        cy.get("input[type='checkbox']").should('not.be.checked')
        cy.get("input[type='checkbox']").check(['Wallnuts'])
    }


    asertation(age, date){
        cy.get('.btn').click()
        cy.get('#cbr').should('have.text','Ognjen Pantic')
        cy.get('#orr').contains('Milan')
        cy.get('#agr').invoke('text').should('eq', String(age))
        cy.get('#dtr').contains('2023-12-24')
        cy.get('#tmr').contains(date)
        cy.get('#gur').contains('11-20')
        cy.get('#alr').contains('No')
    }
    
}

export default ProblemTest_1