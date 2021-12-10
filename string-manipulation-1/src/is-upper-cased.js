/* exported isUpperCased */

// define a function named isUpperCased with one parameter of `word`
// use a loop with an initialization of 0 and a condition of i < word.length and updates i by one
// use an if statement to see if the string is all uppercase and if its return true and a else statement that returns false

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word === word.toUpperCase()) {
      return true;
    }
  }
  return false;
}

// define a function named isUpperCased with one parameter of `word`
// use a loop with an initialization of 0 and a condition of i < word.length and updates i by one
// use an if statement to see if the string is all uppercase and if its return true
// return false
