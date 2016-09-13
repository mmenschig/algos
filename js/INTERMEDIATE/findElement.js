/*  Function that looks through an array (first argument) 
    and returns the first element in the array that passes a 
    truth test (second argument).
*/
function findElement(arr, func) {

    var result = arr.filter(func);
    
    // returning first element that
    // passes the filter criteria
    return result[0] 

}

findElement([1, 2, 3, 4, 5, 8], function(num) {return num % 2 === 0;});