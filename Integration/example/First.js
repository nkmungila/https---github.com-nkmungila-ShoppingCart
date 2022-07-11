/// <reference types="Cypress" />

describe ("The Test Suite",() =>{
it("Shopping Cart Veg",function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("cu")
    cy.get(".product:visible").should('have.length',2)
    //cy.get(".products").find(".product").should('have.lenght',2)
    cy.get(".products").find(".product").each(($e1,list,collect) =>{
        cy.log(($e1.find('h4.product-name').text()))
        if (($e1.find('h4.product-name').text()).includes('Cucumber'))
        {
            var one = $e1.find('button')
            one.click()
        }
    })
    cy.get('.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()



    //cy.get(':nth-child(1) > .stepper-input > .increment').click()
    //cy.get(':nth-child(1) > .product-action > button').click()


})
it.only("Shopping Cart Dress",() =>{
    cy.visit('https://automationexercise.com/products')
    cy.get('#search_product').type('Dress')
    cy.get('#submit_search').click()
    cy.get('.features_items').find('.col-sm-4').each(($e1,index,$list) =>{
       const dress= $e1.find('.productinfo.text-center').text()
       //cy.log(dress)
       if(dress.includes('Sleeves'))
       {
        const one = $e1.find('.btn.btn-default.add-to-cart')
        cy.log($e1.find('.btn.btn-default.add-to-cart'))
        one[1].click()
       }
    })
    cy.get('.modal-body > :nth-child(1)').should('have.text','Your product has been added to cart.')
})

})