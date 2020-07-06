// Contém a função principal e genérica (mdLinks) que manipula arquivos.md em busca de links

const fileContent = require('./reader');
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
            path
          })
        })
        if (options === '--validate') {
          console.log(options)
        }
        // linkList.map(item => {
        //   axios.get(link.href)
        //   .then(result => {
        //     console.log(result.status)
        //     result.status == 200 ? link.status = 'OK' : link.status = 'fail'
        //   })
        //   .catch(error => {
        //     console.log('Não foi possível validar o link');
        //   })
        // })

        resolve(linkList);
      })
      .catch(error => console.log('Ocorreu um erro: arquivo ou diretório não encontrado'))
  });
};

module.exports = mdLinks;