/* We check if the predicate (second argument) is truthy
on all elements of a collection (first argument).
*/
function truthCheck(collection, pre) {

    var i = 0;
    while ( i < collection.length) {
        if (!collection[i][pre]) {
            return false;
        }
        i++;
    }
    return true; // all properties exist and are truthy
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");