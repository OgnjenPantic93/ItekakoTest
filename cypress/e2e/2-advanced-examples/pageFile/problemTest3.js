class ProblemTest_3{
    visitTest(){
        cy.visit('http://10.15.1.204:3000/')
        cy.title().should('eq', 'QA Exam Kitchen')
    }
    toThePage3(){
        cy.get('.nav-link').contains('Problem 3 Menu').click()
        cy.url().should('include', 'menu')
        cy.get('.subheading').should('contain.text', "Specialties")
    }
    orderFoodx2(food, suma){
        cy.get('.text').contains(food).parentsUntil('.menus').find("[type='button']").click()
        cy.get('#listaItema',{delay: 2000, timeout: 4000 }).contains(food).should('be.visible')
        cy.get('.text').contains(food).parentsUntil('.menus').find("[type='button']").click()
        cy.wait(3000)
        cy.get('.text').contains(food).parentsUntil('.menus').find('.price').invoke('text')
            .as('priceOfFood')
        cy.get('@priceOfFood').then(cena =>{
            var icena = parseInt(cena.substring(1))
            suma.suma += icena * 2
        })
        
    }
    orderFood(food, suma){

        cy.get('.text').contains(food).parentsUntil('.menus').find("[type='button']").click().then(()=>{
            cy.get('#listaItema',{delay: 2000, timeout: 4000 }).contains(food).should('be.visible')
        })
        cy.get('.text').contains(food).parentsUntil('.menus').find('.price').invoke('text')
            .as('priceOfFood')
        cy.get('@priceOfFood').then(cena =>{
            var icena = parseInt(cena.substring(1))
            suma.suma += icena
        })
        
    }
    priceCheck(suma){
        cy.get('#ukupno').invoke('text').then(ukupno =>{
            var iukupno = parseInt(ukupno)
            expect(suma).to.equals(iukupno)
        })

    }
    priceCheckOffAllProducts(){
        cy.get(".text > .d-flex").find('.one-forth').invoke('text').as('itemPrice')
        var foodPriceTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0;
            var itemPrice = $linkText.split("$");
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                itemPriceTotal += Number(itemPrice[i])
            }
            itemPriceTotal += foodPriceTotal
            cy.log("Price of all product: $" + itemPriceTotal)
            expect(itemPriceTotal).to.equals(169)
        })
    }
    listOfWhatYouOrdered(){
        cy.get("#listaItema").each(($el, index, $list) => {
                cy.log('List of your order: '+ $el.text())
            })
    }

    failedTestOrderFood(food, suma){
        cy.get('.text').contains(food).parentsUntil('.menus').find("[type='button']").click()
        cy.get('.text').contains(food).parentsUntil('.menus').find('.price').invoke('text')
            .as('priceOfFood')
        cy.get('@priceOfFood').then(cena =>{
            var icena = parseInt(cena.substring(1))
            suma.suma += icena
    })
}


}

export default ProblemTest_3
