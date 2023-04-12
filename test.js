test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


test("One dollar should be 106 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBeCloseTo(106.58, 1);   //1 euro entre 1.2 dolares por 127,9 = 106,583333333....
})


test("5000 yen should be 31,27 pound", function(){
    // importo la funcion desde app.js
    const {fromYenToPound } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(5000)).toBeCloseTo(31.27, 1); // 5000 yen entre 127,9 por 0.8 = 31,274433.....
})