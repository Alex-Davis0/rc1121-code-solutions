/* exported isVowel */

function isVowel(char) {
  var vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < char.length; i++) {
    if (vowel.includes(char[i])) {
      return true;
    }
  }
  return false;
}
