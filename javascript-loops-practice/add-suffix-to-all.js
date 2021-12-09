/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var word = [];
  for (var i = 0; i < words.length; i++) {
    word.push(words[i] + suffix);
  }
  return word;
}
