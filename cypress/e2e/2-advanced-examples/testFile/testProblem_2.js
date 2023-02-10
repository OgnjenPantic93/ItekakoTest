/// reference types="cypress" />
import ProblemTest_2 from "../pageFile/problemTest2";

describe('Second test', () => {
    const problemTest2 = new ProblemTest_2
    var result = {broj: 0};
    beforeEach('Home tab', () => {
        problemTest2.visitTest();
        result = {broj: 0};


    })

    it('Mind Cook(0-1)', () => {
        //Pozivanje metode
        problemTest2.mindCook('#btn1', '.resultText1','Leto', result);
        problemTest2.mindCook('#btn2', '.resultText1','Zima', result)
        problemTest2.chekingTheResult('.resultText1','Leto')

        problemTest2.mindCook('#btn4', '.resultText2','Caj', result);
        problemTest2.mindCook('#btn3', '.resultText2','Caj', result);
        problemTest2.chekingTheResult('.resultText2','Kafa')

        problemTest2.mindCook('#btn6', '.resultText3','Belo', result);
        problemTest2.mindCook('#btn5', '.resultText3','Belo', result)
        problemTest2.chekingTheResult('.resultText3','Crno')

        problemTest2.mindCook('#btn8', '.resultText4','Slatko', result);
        problemTest2.mindCook('#btn7', '.resultText4','Slatko', result)
        problemTest2.chekingTheResult('.resultText4','Slano')

        problemTest2.mindCook('#btn10', '.resultText5','Kiselo', result);
        problemTest2.mindCook('#btn9', '.resultText5','Kiselo', result)
        problemTest2.chekingTheResult('.resultText5','Ljuto')

        problemTest2.mindCook('#btn12', '.resultText6','Kasika', result);
        problemTest2.mindCook('#btn11', '.resultText6','Kasika', result);
        problemTest2.chekingTheResult('.resultText6','Viljuska')

        problemTest2.mindCook('#btn14', '.resultText7','Duboki', result);
        problemTest2.mindCook('#btn13', '.resultText7','Duboki', result)
        problemTest2.chekingTheResult('.resultText7','Plitki')

        problemTest2.mindCook('#btn16', '.resultText8','Voce', result);
        problemTest2.mindCook('#btn15', '.resultText8','Voce', result)
        problemTest2.chekingTheResult('.resultText8','Povrce')

        problemTest2.mindCook('#btn18', '.resultText9','Koktel', result, true, 1);
        problemTest2.mindCook('#btn17', '.resultText9','Koktel', result)
        problemTest2.chekingTheResult('.resultText9','Pivo')
        
        problemTest2.checkTheResult("Avocado Benedict")
    })

    it('Mind Cook(2-3)',() =>{
        problemTest2.mindCook('#btn1', '.resultText1','Leto', result);
        problemTest2.mindCook('#btn3', '.resultText2','Caj', result);
        problemTest2.mindCook('#btn5', '.resultText3','Belo', result);
        problemTest2.mindCook('#btn8', '.resultText4','Slatko', result);
        problemTest2.mindCook('#btn10', '.resultText5','Kiselo', result);
        problemTest2.mindCook('#btn12', '.resultText6','Kasika', result);
        problemTest2.mindCook('#btn14', '.resultText7','Duboki', result);
        problemTest2.mindCook('#btn16', '.resultText8','Voce', result);
        problemTest2.mindCook('#btn18', '.resultText9','Koktel', result, true, 3);

        problemTest2.checkTheResult("Strawberry Sundae")

    })
    it('Mind Cook(4-5)',() =>{
        problemTest2.mindCook('#btn2', '.resultText1','Leto', result);
        problemTest2.mindCook('#btn3', '.resultText2','Caj', result);
        problemTest2.mindCook('#btn5', '.resultText3','Belo', result);
        problemTest2.mindCook('#btn7', '.resultText4','Slatko', result);
        problemTest2.mindCook('#btn10', '.resultText5','Kiselo', result);
        problemTest2.mindCook('#btn11', '.resultText6','Kasika', result);
        problemTest2.mindCook('#btn13', '.resultText7','Duboki', result);
        problemTest2.mindCook('#btn16', '.resultText8','Voce', result);
        problemTest2.mindCook('#btn18', '.resultText9','Koktel', result, true, 5);


        problemTest2.checkTheResult("Soy Salmon")
    })
    it('Mind Cook(6-7)',() =>{
        problemTest2.mindCook('#btn2', '.resultText1','Leto', result);
        problemTest2.mindCook('#btn3', '.resultText2','Caj', result);
        problemTest2.mindCook('#btn5', '.resultText3','Belo', result);
        problemTest2.mindCook('#btn7', '.resultText4','Slatko', result);
        problemTest2.mindCook('#btn10', '.resultText5','Kiselo', result);
        problemTest2.mindCook('#btn11', '.resultText6','Kasika', result);
        problemTest2.mindCook('#btn13', '.resultText7','Duboki', result);
        problemTest2.mindCook('#btn15', '.resultText8','Voce', result);
        problemTest2.mindCook('#btn18', '.resultText9','Koktel', result, true, 6);

        problemTest2.checkTheResult("Culiflower Dipper")
    })
     it('Mind Cook(8-9)',() =>{
        problemTest2.mindCook('#btn1', '.resultText1','Leto', result);
        problemTest2.mindCook('#btn2', '.resultText1','Zima', result);
        problemTest2.chekingTheResult('.resultText1','Leto')

        problemTest2.mindCook('#btn3', '.resultText2','Caj', result);
        problemTest2.mindCook('#btn4', '.resultText2','Kafa', result);
        problemTest2.chekingTheResult('.resultText2','Caj')

        problemTest2.mindCook('#btn5', '.resultText3','Belo', result);
        problemTest2.mindCook('#btn6', '.resultText3','Crno', result);
        problemTest2.chekingTheResult('.resultText3','Belo')

        problemTest2.mindCook('#btn7', '.resultText4','Slatko', result);
        problemTest2.mindCook('#btn8', '.resultText4','Slano', result);
        problemTest2.chekingTheResult('.resultText4','Slatko')

        problemTest2.mindCook('#btn9', '.resultText5','Kiselo', result);
        problemTest2.mindCook('#btn10', '.resultText5','Ljuto', result);
        problemTest2.chekingTheResult('.resultText5','Kiselo')

        problemTest2.mindCook('#btn11', '.resultText6','Kasika', result);
        problemTest2.mindCook('#btn12', '.resultText6','Viljuska', result);
        problemTest2.chekingTheResult('.resultText6','Kasika')

        problemTest2.mindCook('#btn13', '.resultText7','Duboki', result);
        problemTest2.mindCook('#btn14', '.resultText7','Plitki', result);
        problemTest2.chekingTheResult('.resultText7','Duboki')

        problemTest2.mindCook('#btn15', '.resultText8','Voce', result);
        problemTest2.mindCook('#btn16', '.resultText8','Povrce', result);
        problemTest2.chekingTheResult('.resultText8','Voce')

        problemTest2.mindCook('#btn17', '.resultText9','Koktel', result, true, 9);
        problemTest2.mindCook('#btn18', '.resultText9','Pivo', result)
        problemTest2.chekingTheResult('.resultText9','Koktel')

         problemTest2.checkTheResult("Blonde")
    })


})