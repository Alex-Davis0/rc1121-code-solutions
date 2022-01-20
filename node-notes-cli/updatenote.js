const fs = require('fs');
const data = require('./data');
const notes = data.notes;
const input = process.argv[3];
const entry = process.argv[4];

notes[input] = entry;

const stringify = JSON.stringify(data, null, 2);

fs.writeFile('data.json', stringify, err => {
  if (err) throw err;
});
