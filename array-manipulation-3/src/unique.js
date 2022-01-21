/* exported unique */

function unique(array) {
  const repeats = {};
  const unquiearray = [];
  for (const word of array) {
    if (word in repeats) {
      continue;
    }
    repeats[word] = true;
    unquiearray.push(word);
  }
  return unquiearray;
}
