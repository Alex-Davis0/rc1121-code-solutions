/* exported countdown */
function countdown(number) {
  var numbers = [];
  for (var i = number; i >= 0; i--) {
    numbers.push(number);
    number = i - 1;
  }
  return numbers;
}
