/* exported omit */

function omit(source, keys) {
  var object = { ...source };
  for (var property of keys) {
    if (property in source) {
      delete object[property];
    }
  }
  return object;
}
