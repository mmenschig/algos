
function truthCheck(collection, pre) {

    var i = 0;
    while ( i < collection.length) {

        if (!collection[i][pre]) {
            return false;
        }
        
        i++;
    }

    return true;

}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");