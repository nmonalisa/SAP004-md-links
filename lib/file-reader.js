const fs = require('fs').promises;

const readFile = (path) => fs.readFile(path, 'utf-8', data => {
  resolve(data);
  reject('Não foi possível ler o seu arquivo.')
});

module.exports = readFile