test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = (3.5 * 1.2); 
    
    // this is the comparison for the unit test
     expect(expected).toBe(dollars);
})

test("One dolar should be 106.5 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromDollarToYen(3.5)

    // if 1 dolar is 106.5 yen, then 3.5 dollar should be (3.5 * 106.5)
    const yen = fromDollarToYen(3.5)
    
    // this is the comparison for the unit test
    const expected = (3.5 * 106.5); 

    // this is the comparison for the unit test
    expect(expected).toBe(yen);
})

test("One yen should be 0.0067 pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const pound = fromYenToPound(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = (3.5 * 0.0067);  
    
    // this is the comparison for the unit test
    expect(expected).toBe(pound);
})