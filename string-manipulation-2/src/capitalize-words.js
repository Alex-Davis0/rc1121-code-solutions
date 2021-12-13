/* exported capitalizeWords */

function capitalizeWords(string) {
  var upper = string.toLowerCase().split(' ');
  for (var i = 0; i < upper.length; i++) {
    upper[i] = upper[i][0].toUpperCase() + upper[i].substr(1);
  }
  return upper.join(' ');
}
