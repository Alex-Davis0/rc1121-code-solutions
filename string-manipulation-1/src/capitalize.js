/* exported capitalize */

// define a function named `capitalize`  with one parameter of `word`
// use a loop that intializes at 0 with a condition of i <= 0 and updates
// use a method to set the first index to a capital letter
// return `word`

function capitalize(word) {
  var upper = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    upper += word[i].toLowerCase();
  }
  return upper;
}

// define a function named `capitalize`  with one parameter of `word`
// use a method of word[0].toUpperCase() and assign it the variable of `upper`
// use a loop that intializes at 1 with a condition of i < word.length then adds 1 to i
// use an expression that adds `upper` to word[i].toLowerCase() and assigns that value back to `upper`
// return upper
