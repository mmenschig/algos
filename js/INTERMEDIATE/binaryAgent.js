
function binaryAgent(str) {
    
    // Used to store 
    var strings = str.split(" ");
    var result = [];

    strings.forEach(function(item) {
        result.push(String.fromCharCode(parseInt(item, 2)));
    })

    return result.join(separator='')
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");