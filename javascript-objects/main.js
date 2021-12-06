var student = {
  firstName: 'ALexander',
  lastName: 'Davis',
  age: 26
};
var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Worked as an insructional aide';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Nissan',
  model: 'R35 GTR',
  year: 2012
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Rylee',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
