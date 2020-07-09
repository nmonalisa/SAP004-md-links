// Contém a função principal e genérica (mdLinks) que manipula arquivos.md em busca de links

// const fileContent = require('./reader');
const axios = require('axios')
const fs = require('fs').promises;
const regex = /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm;



const getFile = (path) => fs.readFile(path, 'utf-8', data => {
  resolve(data);
  reject('Não foi possível ler o seu arquivo.')
});

const extractMdLinks = (text, regex, cutBy) => {
  const linkList = []
  text.match(regex).forEach(item => {
    const splitedContent = item.split(cutBy);
    linkList.push({
      href: splitedContent[1].slice(0, -1),
      text: splitedContent[0].slice(1).substr(0, 50),
    })
  });
  return linkList;
}


const mergeStatus = (links, status) => {
  return links.map((link, index) => ({
    ...link,
    status: status[index]
  }))
}

const validateLink = function (linklist) {
  return new Promise(resolve => {
    const validate = linklist.map(link => {
      return axios.get(link.href)
        .then(result => {
          return result.status === 200 ? 'OK' : 'fail'
        })
        .catch(() => {
          return 'fail'
        });
    })
    Promise.all(validate)
      .then(result => {
        resolve(mergeStatus(linklist, result));
      })
  })
};


const mdLinks = function (path, options) {
  return new Promise((resolve, reject) => {
    getFile(path)
      .then(text => {
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