const read = require('fs');

if (process.argv.length === 4) {
  const string1 = read.readFile(process.argv[2], 'utf8', data);
  const string2 = read.readFile(process.argv[3], 'utf8', data);
  console.log(string1 + string2);
} else if (process.argv.length === 5) {
  const string1 = read.readFile(process.argv[2], 'utf8', data);
  const string2 = read.readFile(process.argv[3], 'utf8', data);
  const string3 = read.readFile(process.argv[4], 'utf8', data);
  console.log(string1 + string2 + string3);
} else {
  read.readFile(process.argv[2], 'utf8', data);
}

function data(err, data) {
  if (err) throw err;
  console.log(data);
}
