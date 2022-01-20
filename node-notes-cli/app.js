const command = process.argv[2];

if (command === 'read') {
  require('./read');
} else if (command === 'create') {
  require('./addnote');
} else if (command === 'delete') {
  require('./deletenote');
} else if (command === 'update') {
  require('./updatenote');
}
