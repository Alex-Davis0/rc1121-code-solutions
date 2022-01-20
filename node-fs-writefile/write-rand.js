const fs = require('fs');

const data = Math.floor(Math.random() * 100).toString();
fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
