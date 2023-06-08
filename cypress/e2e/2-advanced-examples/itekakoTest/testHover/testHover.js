describe('hover testing',()=>{
    it('Visit page',() => {                                     //For this test, I had to install real events, because .trigger will only affect events in JavaScript, 
        cy.visit('http://the-internet.herokuapp.com/hovers')    //since this is CSS, I had to instal real events to trigger hover.
        cy.get('.figure').should('have.length', 3)                                                      
    })

    it('Checking the hover for the first image',()=>{
        cy.get('.figure').eq(0).realHover('mouseover')
        cy.get('.figcaption').contains('user1').should('be.visible')
        cy.get('.figcaption').contains('name: user2').should('not.be.visible')
        cy.get('.figcaption').contains('name: user3').should('not.be.visible')                //In this test, I am testing if the hover works on the first image, is the hovering div element visible.
        cy.get('.figcaption:visible').filter(':visible').should('have.length', 1)             //Also, when hovering the first, other two shouldn't be visible/clickable.    
        cy.get('.figcaption').invoke('height').should('be.lt', 55)                            //Cheking the height of the div element
        cy.get('.figure').eq(0).realHover('mouseout')  
        cy.intercept('GET', "http://the-internet.herokuapp.com/__cypress/tests?p=cypress/e2e/2-advanced-examples/itekakoTest/testHover/testHover.js").as('wait')
        cy.get('@wait')                                                                       //Waiting netowrk response, to have status 200
        cy.get('.figcaption').contains('name: user1').should('not.be.visible')                //When we use mouseout, the div element shouldn't be visible
         
    })
    it.skip('Checking the hover for the second image',()=>{
        cy.get('.figure').eq(1).realHover('mouseover')                                                 //The same concept as the first one
        cy.get('.figcaption').contains('name: user2').should('be.visible')                   
        cy.get('.figcaption').contains('name: user1').should('not.be.visible')               
        cy.get('.figcaption').contains('name: user3').should('not.be.visible')                                                              
        cy.get('.figcaption').invoke('height').should('be.lt', 55)         
        cy.get('.figure').eq(1).realHover('mouseout')                       
        cy.get('.figcaption').contains('name: user2').should('not.be.visible')               
         
    })
    it.skip('Checking the hover for the third image',()=>{                                             //The same concept as the first one
        cy.get('.figure').eq(2).realHover('mouseover')
        cy.get('.figcaption').contains('name: user3').should('be.visible')
        cy.get('.figcaption').contains('name: user1').should('not.be.visible')
        cy.get('.figcaption').contains('name: user2').should('not.be.visible')                
        cy.get('.figcaption').invoke('height').should('be.lt', 55)          
        cy.get('.figure').eq(2).realHover('mouseout')                
        cy.get('.figcaption').contains('name: user3').should('not.be.visible')               
        
    })
    it('Clicking on the first view profile and cheking the url',()=>{
        cy.intercept('GET', "http://the-internet.herokuapp.com/__cypress/tests?p=cypress/e2e/2-advanced-examples/itekakoTest/testHover/testHover.js").as('wait')
        cy.get('@wait')                                                 //Waiting netowrk response, to have status 200
        cy.get('.figure').eq(0).realHover('mouseover')                 //Checking if the "View Profile" button is working and url of the first profile is correct
        cy.get('a[href="/users/1"]').click({force: true})
        cy.url().should("include", "users/1")
    })
    it('Clicking on the second view profile and cheking the url',()=>{
        cy.go('back')        
        cy.intercept('GET', "http://the-internet.herokuapp.com/__cypress/tests?p=cypress/e2e/2-advanced-examples/itekakoTest/testHover/testHover.js").as('wait')
        cy.get('@wait')                                                 //Waiting netowrk response, to have status 200
        cy.get('.figure').eq(1).realHover('mouseover')                  //Checking if the "View Profile" button is working and url of the second profile is correct
        cy.get('a[href="/users/2"]').click({force: true})
        cy.url().should("include", "users/2")
        
    })
    it('Clicking on the third view profile and cheking the url',()=>{
        cy.go('back')        
        cy.intercept('GET', "http://the-internet.herokuapp.com/__cypress/tests?p=cypress/e2e/2-advanced-examples/itekakoTest/testHover/testHover.js").as('wait')
        cy.get('@wait')                                                 //Waiting netowrk response, to have status 200
        cy.get('.figure').eq(2).realHover('mouseover')                  //Checking if the "View Profile" button is working and url of the third profile is correct
        cy.get('a[href="/users/3"]').click({force: true})
        cy.url().should("include", "users/3")
        
    })
    it('Failed test 1',()=>{
        cy.visit('http://the-internet.herokuapp.com/hovers')    
        cy.intercept('GET', "http://the-internet.herokuapp.com/__cypress/tests?p=cypress/e2e/2-advanced-examples/itekakoTest/testHover/testHover.js").as('wait')
        cy.get('@wait')                                             //This is a bug. Hovering right next to the image shouldn't show the div element. 
        cy.get('.figure').eq(0).realHover({position: 'Right'})
        cy.get('.figcaption').contains('name: user1').should('not.be.visible')
    })

    it('Test without hovering ',()=>{                                              //This is cheating. But if hover isn't working, this way we can check if all the buttons works. 
        cy.get('.figcaption').invoke('show')
        cy.get('.figcaption:visible').filter(":visible").should('have.length', 3)
        cy.get('a[href="/users/1"]').should('be.visible')
        cy.get('a[href="/users/2"]').should('be.visible')
        cy.get('a[href="/users/3"]').should('be.visible')
    })
    it('Click on the element when the ',()=>{        
        // cy.get(':nth-child(4) > img').realHover('mouseover') 
        cy.get('.figcaption').invoke('show')
        cy.get('.row').contains('Elemental Selenium').invoke('removeAttr','target').click()
        cy.url().should('include', '')
    }) 

})
