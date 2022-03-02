/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (second > first) {
    queue.enqueue(second);
    return first;
  } if (second === first) {
    queue.enqueue(second);
    return first;
  } if (first > second) {
    queue.enqueue(first);
    return second;
  } if (second === undefined) {
    return first;
  } else {
    return second;
  }
}
