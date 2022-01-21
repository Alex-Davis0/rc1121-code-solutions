/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var firstStringsorted = firstString.toLowerCase().split(' ').join('').split('').sort().join('');
  var secondStringSorted = secondString.toLowerCase().split(' ').join('').split('').sort().join('');

  if (firstStringsorted !== secondStringSorted) {
    return false;
  }
  return true;
}
