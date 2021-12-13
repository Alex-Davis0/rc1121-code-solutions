/* exported capitalizeWord */

// define a function named `capitalize`  with one parameter of `word`
// use a loop that intializes at 0 with a condition of i <= 0 and updates
// use a method to set the first index to a capital letter
// return `word`

function capitalizeWord(word) {
  var upper = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    if (word[word.length - 1] === 't') {
      return 'JavaScript';
    }
    upper += word[i].toLowerCase();
  }
  return upper;
}

// define a function named `capitalize`  with one parameter of `word`
// create a variable named `upper` with a method assigned
// use a loop that intializes at 0 with a condition of i <= 0 and updates
// use an if statement to see if the last index of `word is 't' and return 'JavaScript'
// use a method to set the first index to a capital letter
// return `word`
