/* exported getLength */

function getLength(list) {
  let x = 1;
  while (list.next !== null) {
    list = list.next;
    x++;
  }
  return x;
}
