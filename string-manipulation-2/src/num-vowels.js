/* exported numVowels */

function numVowels(string) {
  var vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowel.includes(string[i])) {
      count++;
    }
  }
  return count;
}
