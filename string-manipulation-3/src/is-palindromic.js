/* exported isPalindromic */

function isPalindromic(string) {
  var stringcombo = string.replaceAll(' ', '').toLowerCase();
  for (var i = 0; i < stringcombo.length / 2; i++) {
    if (stringcombo[i] !== stringcombo[stringcombo.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
