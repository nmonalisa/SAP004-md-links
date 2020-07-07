// Contém a função principal e genérica (mdLinks) que manipula arquivos.md em busca de links

const fileContent = require('./reader');
const validateLink = require('./validator')
const regex = /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm;

const mdLinks = function (path, options) {
  return new Promise((resolve, reject) => {
    fileContent(path)
      .then(text => {
        let linkList = [];
        text.match(regex).map(item => {
          const splitedContent = item.split('](');
          linkList.push({
            href: splitedContent[1].slice(0, -1),
            text: splitedContent[0].slice(1).substr(0, 50),
            path,
            status: '?'
          })
        })
        if (options === '--validate') {
          validateLink(linkList)
            .then(result => resolve(result))
            .catch((error) => console.log(error.toJSON()))
        } else {
          resolve(linkList);
        }
      })
      .catch(() => console.log('Ocorreu um erro: arquivo ou diretório não encontrado'))
  });
};

module.exports = mdLinks;