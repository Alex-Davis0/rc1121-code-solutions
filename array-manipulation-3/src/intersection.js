/* exported intersection */
function intersection(first, second) {
  const intersection = {};
  const res = [];

  for (const word of first) {
    intersection[word] = true;
  }

  for (const word of second) {
    if (word in intersection) {
      delete intersection[word];
    }
  }

  for (const word of first) {
    if (!(word in intersection)) {
      res.push(word);
    }
  }
  return res;
}
