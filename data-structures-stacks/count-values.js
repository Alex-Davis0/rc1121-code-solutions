/* exported countValues */

function countValues(stack) {
  let value = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    value++;
  }
  return value;
}
