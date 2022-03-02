/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }
  const third = list.next.next.data;
  const fourth = list.next.next.next.data;
  list.next.data = third;
  list.next.next.data = fourth;
  list.next.next.next = null;
}
