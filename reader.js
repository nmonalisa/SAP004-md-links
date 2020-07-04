const fs = require('fs').promises;

const fileContent = path => fs.readFile(path, 'utf-8', (resolve, reject) => {
  resolve(text)
  reject(error)
});


module.exports = fileContent