const fs = require('fs');
const data = require('./data');
const notes = data.notes;
const id = data.nextId;
const newentry = process.argv[3];

notes[id] = newentry;
data.nextId++;

const stringify = JSON.stringify(data, null, 2);

fs.writeFile('data.json', stringify, err => {
  if (err) throw err;
});
