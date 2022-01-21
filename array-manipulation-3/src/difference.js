/* exported difference */

function difference(first, second) {
  const difference = [];

  for (const firstitem of first) {
    if (!second.includes(firstitem)) {
      difference.push(firstitem);
    }
  }

  for (const seconditem of second) {
    if (!first.includes(seconditem)) {
      difference.push(seconditem);
    }
  }
  return difference;
}
