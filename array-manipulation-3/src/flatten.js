/* exported flatten */
function flatten(array) {
  const flattened = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (const element of item) {
        flattened.push(element);
      }
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}
