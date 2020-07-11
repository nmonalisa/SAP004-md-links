// const fs = require('fs').promises;

// const readFile = (path) => {
//     if (typeof path !== 'string' || path === '') {
//       throw new TypeError
//     }
//     return fs.readFile(path, 'utf-8', (data, error) => {
//       resolve(data);
//       reject(error)
//     });
//   }
//   // readFile(78).then(data => console.log(data)).catch(error => console.log(error))
// module.exports = readFile
const { readFileSync } = require('fs')
console.log('Text', readFileSync('../README.md', 'utf-8'))