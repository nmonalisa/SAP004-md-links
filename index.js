// Contém a função principal e genérica (mdLinks) que manipula arquivos.md em busca de links

const getFile = require('./reader')
const validateLink = require('./validator')
const extractMdLinks = require('./link_catcher')



const mdLinks = function (path, options) {
  return new Promise((resolve, reject) => {
    getFile(path)
      .then(text => {
        const regex = /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm;
        const linkList = extractMdLinks(text, regex, '](')

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