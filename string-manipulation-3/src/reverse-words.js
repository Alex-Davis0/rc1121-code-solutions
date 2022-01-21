/* exported reverseWords */

function reverseWords(string) {
  var stringarray = string.split(' ');
  var reversearray = [];
  for (var i = 0; i < stringarray.length; i++) {
    var reverseword = [];
    for (var j = stringarray[i].length - 1; j >= 0; j--) {
      reverseword.push(stringarray[i][j]);
    }
    reversearray.push(reverseword.join(''));
  }
  return reversearray.join(' ');
}
