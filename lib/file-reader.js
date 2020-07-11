const { readFileSync } = require('fs')
const readFile = path => readFileSync(path, 'utf-8');
module.exports = readFile