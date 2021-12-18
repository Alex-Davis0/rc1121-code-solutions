/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var last = newArray[newArray.length - 1];
    if (!last || last.length === size) {
      newArray.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return newArray;
}
