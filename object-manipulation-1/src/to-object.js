/* exported toObject */

function toObject(keyValuePair) {
  var a = {};
  a[keyValuePair[0]] = keyValuePair[1];
  return a;
}
