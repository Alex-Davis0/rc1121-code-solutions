/* exported isLowerCased */

// define a function named isLowerCased with one parameter `word`
// use a loop with an initialization of 0 and a condition of i < word.length and updates i by one
// use an if statement to chech if every character in `word` is lowercase if true returns boolean true
// return false

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word === word.toLowerCase()) {
      return true;
    }
  }
  return false;
}

// define a function named isLowerCased with one parameter `word`
// use a loop with an initialization of 0 and a condition of i < word.length and updates i by one
// use an if statement to chech if every character in `word` is lowercase if true returns boolean true
// return falses
