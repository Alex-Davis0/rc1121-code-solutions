/* exported oddOrEven */

function oddOrEven(numbers) {
  var array = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      array.push('odd');
    } else {
      array.push('even');
    }
  }
  return array;
}
