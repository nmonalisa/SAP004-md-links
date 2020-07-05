const fs = require('fs').promises;
const fileContent = path => fs.readFile(path, 'utf-8')
module.exports = fileContent