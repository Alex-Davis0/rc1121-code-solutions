/* exported ransomCase */

function ransomCase(string) {
  var a = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2) {
      a += string[i].toUpperCase();
    } else {
      a += string[i].toLowerCase();
    }
  }
  return a;
}
