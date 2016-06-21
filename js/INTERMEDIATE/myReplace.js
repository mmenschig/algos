
function myReplace(str, before, after) {

  var str = str.split(" ");
  var beforeIndex = str.indexOf(before);

  // Capitalizing after argument if
  // before argument is capitalized
  if (before[0] === before[0].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  // Removing 1 item at before and
  // replacing it with new after
  str.splice(beforeIndex, 1, after);

  // returning space joined string
  return str.join(" ");
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
