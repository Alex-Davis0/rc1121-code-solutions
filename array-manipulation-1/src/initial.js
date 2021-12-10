/* exported initial */

function initial(array) {
  var a = [];
  for (var i = 0; i < array.length - 1; i++) {
    a.push(array[i]);
  }
  return a;
}
