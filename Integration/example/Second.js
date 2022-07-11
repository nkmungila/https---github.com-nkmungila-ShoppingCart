/// <reference types="Cypress" />
describe("Table Example",()=>{
    it("Table Test Case",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($e1,index,list) =>{
            const cource = $e1.text()
            if (cource.includes('Master Selenium')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const price1 = price.text()
                    cy.log(price1)
                    expect(price1).equal('25')
                        //expect.price1.to.equal(25)
                    
                })
            }
        })
    })
})