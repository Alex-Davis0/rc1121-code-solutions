/* exported getLastChar */

// define a function named `getLastChar` which has a single parameter `string`
// create a string and assign it to a variable named `char`
// use a loop that initialize at 0 with a condition of if i is true run if false stop then update i
// then use an expression to add whatever is at `string[0]` to `char` and reassign that value to `char`
// return `char`

function getLastChar(string) {
  var char = '';
  for (var i = 0; i <= 0; i++) {
    char += string[string.length - 1];
  }
  return char;
}

// define a function named `getLastChar` which has a single parameter `string`
// create a string and assign it to a variable named `char`
// use a loop that initialize at 0 with a condition of if i is true run if false stop then update i
// then use an expression to add whatever is at `string[string.length - 1]` to `char` and reassign that value to `char`
// return `char`
