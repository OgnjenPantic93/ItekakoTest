/// reference types="cypress" />
import ProblemTest_3 from "../pageFile/problemTest3";

describe('Third test', () => {
    const problemTest3 = new ProblemTest_3
    it('Home tab', () => {
        problemTest3.visitTest();
        problemTest3.toThePage3()

    })
    let ukupnaSuma = {suma: 0};
    it('Order a food', () => {
        problemTest3.orderFoodx2("Stuffed veal with pomigrante", ukupnaSuma)
        problemTest3.orderFood('Chicken with parsley', ukupnaSuma)
        problemTest3.orderFood('Stawberry Sudnae', ukupnaSuma)
        problemTest3.orderFood('Skewered pork with Chives', ukupnaSuma)
        problemTest3.orderFood('Pancakes with strawberry cream', ukupnaSuma)
        problemTest3.orderFood('Chocolate Mousse', ukupnaSuma)
        cy.wait(5000)

    })

    it('Price check',() =>{
        problemTest3.priceCheck(ukupnaSuma.suma)

    })

    it('Check of all products',()=>{
        problemTest3.priceCheckOffAllProducts()
    })
    it('List of what you have ordered',()=>{
        problemTest3.listOfWhatYouOrdered()
    })
    let priceFail = {suma: 0}
    it('Order food',()=>{
        
        problemTest3.visitTest();
        problemTest3.toThePage3()

        problemTest3.failedTestOrderFood("Stuffed veal with pomigrante", priceFail)
        problemTest3.failedTestOrderFood('Chicken with parsley', priceFail)
        problemTest3.failedTestOrderFood('Stawberry Sudnae', priceFail)
        problemTest3.failedTestOrderFood('Skewered pork with Chives', priceFail)
        problemTest3.failedTestOrderFood('Chicken with parsley', priceFail)
        problemTest3.failedTestOrderFood('Chicken with parsley', priceFail)
        cy.wait(3000)
        
    })
    it('This test will fail',()=>{
        problemTest3.priceCheck(priceFail.suma)
    })

 })