const fs = require('fs');
const data = require('./data');
const notes = data.notes;
const input = process.argv[3];

delete notes[input];

const stringify = JSON.stringify(data, null, 2);

fs.writeFile('data.json', stringify, err => {
  if (err) throw err;
});
