function ExampleConstructor() {}
console.log('value of the prototype property:', ExampleConstructor.prototype);
console.log('typeof the prtotype property:', typeof ExampleConstructor.prototype);

var newFunction = new ExampleConstructor();
console.log('value of newFunction:', newFunction);

var instance = (newFunction instanceof ExampleConstructor);
console.log('value of instance:', instance);
