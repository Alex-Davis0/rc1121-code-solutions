var bookshelf = [
  {
    isbn: '21324545456',
    title: 'Servent of the Shard',
    author: 'R.A. Salvatore'
  },
  {
    isbn: '546541546',
    title: 'Promise of the Witch King',
    author: 'R.A. Salvatore'
  },
  {
    isbn: '465487897',
    title: ' Road of the Patriarch',
    author: 'R.A. Salvatore'
  }
];
console.log('value of bookshelf:', bookshelf, typeof bookshelf);

var json = JSON.stringify(bookshelf);

console.log('value of JSON:', json, typeof json);

var string = '{"Id" : "13546579", "Name" : "Alexander Davis"}';

console.log('value of string:', string, typeof string);

var parse = JSON.parse(string);

console.log('value of parse:', parse, typeof parse);
