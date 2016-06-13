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

var order = [1000, 500, 100, 50, 10,
             9, 8, 7, 6, 5, 4, 3, 2, 1];


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

console.log(convertToRoman(3999));
