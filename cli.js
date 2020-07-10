#!/usr/bin/env node

const mdLinks = require('./index');
const path = process.argv[2];
const options = process.argv[3];

const showLinks = function (linkList) {
  console.log(`
  Arquivo lido com sucesso!
  Total de links: ${linkList.length}
  `)
  let i = 0
  linkList.map(link => {
    console.log(
      `Link ${i+=1}: ${link.file} ${link.href} ${link.status} ${link.text}
  -------------------------------`)
  })
};


// Execução
mdLinks(path, options)
  .then(result => showLinks(result))
  .catch(error => console.log(`Ocorreu um erro: ${error}`))