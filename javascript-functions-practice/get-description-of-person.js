/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var describe = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return describe;
}
