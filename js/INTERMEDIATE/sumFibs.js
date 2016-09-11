/*
Sums up all odd Fibonacci numbers that are
less or equal to num.
 */
function sumFibs(num) {

    // Instantiate array with first
    // two fibonacci numbers.
    var fib = [1,1];
    
    for (var i = 2; i <= num; i++) {
        var number = fib[i-2] + fib[i-1];
        
        // pushes sum of previous 2 numbers
        if (number <= num) {
            fib.push(number);
        }
    }

    // pushes only odd numbers into filtered
    // array
    var filtered = fib.filter(function(item) {
        return item % 2 !== 0;
    });

    // We sum up all entries
    var sum = filtered.reduce(function(a, b) { return a + b; }, 0);

    return sum
}

sumFibs(4);