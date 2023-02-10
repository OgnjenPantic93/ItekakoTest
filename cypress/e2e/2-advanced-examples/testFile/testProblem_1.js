/// reference types="cypress" />
import ProblemTest_1 from "../pageFile/problemTest1";

describe('First test', () => {
    const problemTest1 = new ProblemTest_1
    it('Home tab', () => {
        problemTest1.visitTest();

    })

    it('Open a page ',()=> {
        problemTest1.toThePage1()
    })
        let age = Math.floor(Math.random()*70 + 1)
    it('Enter first part of information ',()=> {
        
        problemTest1.informationOne('Ognjen Pantic', 'Milan Jovkovic', age);
        problemTest1.checkingColors();
    
    })
    let x = Math.floor(Math.random()*23 + 1);
    let y = Math.floor(Math.random()*59 + 1);
    if (x <=9){
        x = "0" + x
    }
    if(y <=9){
        y = "0" + y
    }
    let date=(x) + ":" + (y)
    it( 'Enter second part of information',()=> {
        problemTest1.informationTwo(date)

    })
    it( 'Allergies = Yes ',()=> {
        problemTest1.areYouAlergic('Yes')
        problemTest1.alergies()
    
    })
    
    it( 'Allergies = Maybe ',()=> {
        problemTest1.areYouAlergic('Maybe')
        problemTest1.alergies()
    
    })
    it( 'Allergies = No ',()=> {
        problemTest1.areYouAlergic('No')
        cy.get('#which').should('have.css', 'pointer-events','none')
    
    })
    
    it('Assert', ()=>{
        problemTest1.asertation(age, date)
    })
})