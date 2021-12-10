/* exported compact */

function compact(array) {
  var a = [];
  array.forEach(b => {
    if (b) {
      a.push(b);
    }
  });
  return a;
}
