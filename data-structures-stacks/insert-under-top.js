/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const firstItem = stack.pop();
  stack.push(value);

  stack.push(firstItem);
}
