function chunkArrayInGroups(arr, size) {

  var chunks = [];
  var i = 0;
  var n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i+= size));
  }

  return chunks;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);