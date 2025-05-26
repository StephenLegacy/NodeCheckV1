// file-system.js
const fs = require('fs');

// Write to welcome.txt
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read from hello.txt (make sure hello.txt exists)
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log('Content of hello.txt:', data);
});
