// this is my function that converts dollars to yen
const fromDollarToYen = (dollar) => {
    return (dollar * 106.5); 
}

// this is my function that converts euro to dollar
const fromEuroToDollar = (Euro) => {
    return (Euro * 1.2);
}

// this is my function that converts yen to pound
const fromYenToPound = (Yen) => {
    return (Yen * 0.0067);
}

module.exports = {  fromEuroToDollar, fromDollarToYen, fromYenToPound }