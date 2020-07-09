const fs = require('fs').promises;

const getFile = (path) => fs.readFile(path, 'utf-8', data => {
  resolve(data);
  reject('Não foi possível ler o seu arquivo.')
});

module.exports = getFile