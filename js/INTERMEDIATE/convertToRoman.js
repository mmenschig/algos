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
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
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

// We convert the arabic number to our
// roman numerals 
function convertToRoman(num) {

    var conversionArray = []; // Holds roman numerals

    if (num < 0) {
        return "Romans could not deal with negative values.";
    } else if (num === 0) {
        return "nulla";
    }

    for (var i = 0; i < order.length; i++) {

        if (num === 0) {
            break;
        }

        if (num / order[i] >= 1) {
            conversionArray.push(symbols[order[i]]);
            num -= order[i];
            // if a denominator is found, we restart
            // to check if we can divide again
            i -= 1; // far more efficient than setting i to -1
        }
    }

    return conversionArray.join("");

}

console.log(convertToRoman(2016));
