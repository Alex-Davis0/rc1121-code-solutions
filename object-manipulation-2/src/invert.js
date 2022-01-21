/* exported invert */

function invert(source) {
  var inverted = {};
  var arrayValues = Object.values(source);
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    inverted[arrayValues[i]] = keys[i];
  }
  return inverted;
}
