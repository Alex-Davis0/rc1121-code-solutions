/* exported titleCase */
function titleCase(title) {
  var lowerCased = title.toLowerCase();
  var lowerCasedList = ['and', 'or', 'nor', 'but', 'a', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'the'];
  var words = lowerCased.split(' ');
  words[0] = words[0].charAt(0).toUpperCase() + words[0].substring(1);

  for (var i = 0; i < words.length; i++) {
    if (lowerCasedList.indexOf(words[i]) === -1) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    if (words[i].indexOf(':') !== -1) {
      words[i + 1] = words[i + 1].charAt(0).toUpperCase() + words[i + 1].substring(1);
    }
    if (words[i].indexOf('-') !== -1) {
      var location = words[i].indexOf('-');
      var upperCaseLetter = words[i].charAt(location + 1).toUpperCase();
      var newWord = words[i].substring(0, location + 1) + upperCaseLetter + words[i].substring(location + 2, words[i].length);
      words[i] = newWord;
    }
    if (words[i] === 'Javascript') {
      words[i] = 'JavaScript';
    }
    if (words[i] === 'Javascript:') {
      words[i] = 'JavaScript:';
    }
    if ((words[i] === 'Api')) {
      words[i] = 'API';
    }
  }
  return words.join(' ');
}
