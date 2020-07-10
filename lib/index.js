// Contém a função principal e genérica (mdLinks) que manipula arquivos.md em busca de links

const readFile = require('./file-reader')
const validateLink = require('./validator')
const extractMdLinks = require('./link-catcher')


const mdLinks = function (path, options) {
  return new Promise((resolve) => {
    readFile(path)
      .then(text => {
        const linkList = extractMdLinks(text, /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm, '](')

        // Validação dos links
        if (options === '--validate') {
          validateLink(linkList)
            .then(result => resolve(result))
            .catch((error) => console.log(error.toJSON()))
        } else {
          resolve(linkList);
        }
      })
      .catch((error) => console.log(error))
  });
};

module.exports = mdLinks;