var symbols = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
};

// We create an array that holds the property names of
// symbols from largest to smallest
var order = Object.getOwnPropertyNames(symbols).sort(largestToSmallest);


// We use this function to sort the PropertyNames of our
// symbols object.
function largestToSmallest(a, b) {
	return (b - a);
}


function convertToRoman(num) {

    var conversionArray = []; // Holds roman numerals

    if (num === 0) {
        return "nulla";
    }

    for (var i = 0; i < order.length; i++) {

        if (num / order[i] >= 1) {
            conversionArray.push(symbols[order[i]]);
            num -= order[i];
            i = -1; // restarting loop
        }
    }

    // return conversionArray
    return conversionArray.join("");
};

console.log(convertToRoman(2016));
