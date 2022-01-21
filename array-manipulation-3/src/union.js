/* exported union */

function union(first, second) {
  const union = {};
  const res = [];
  for (const word of first) {
    union[word] = true;
  }
  for (const word of second) {
    union[word] = true;
  }

  for (const word of first) {
    if (word in union) {
      res.push(word);
      delete union[word];
    }
  }
  for (const word of second) {
    if (word in union) {
      res.push(word);
      delete union[word];
    }
  }
  return res;
}
