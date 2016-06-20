function whereAreYou(collection, source) {
  // Storing the property names from source
  var sourceKeys = Object.keys(source);

  // We filter the collection array
  return collection.filter(function (obj) {
    for (var prop in sourceKeys) {
      // If collection object does not have the same property as source property
      // or the values of the properties are not equal we return false and move on
      if (!obj.hasOwnProperty(sourceKeys[prop]) || obj[sourceKeys[prop]] !== source[sourceKeys[prop]]) {
        return false;
      }
    }

    // We return true if both our 
    // property names and the 
    // corresponding values match
    return true;

  });
  
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet", middle: "Pedro" }], {first: "Tybalt"});
