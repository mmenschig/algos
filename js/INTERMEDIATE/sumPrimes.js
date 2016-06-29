
function sumPrimes(num) {
  
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }


    return sum + 1;
}

function isPrime(num) {

    for (var x = 2; x <= Math.pow(num, 0.5) + 1; x++) {
        if (num % x === 0) {
            return false
        }
    }

    return true

}

console.log(sumPrimes(977));
