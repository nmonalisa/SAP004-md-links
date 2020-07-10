#!/usr/bin/env node

const chalk = require('chalk');
const mdLinks = require('./index');

// Calback que resolve array de objetos retornado por mdLinks
const showLinks = function (linkList) {
  let i = 0
  if (process.argv[3] === "--validate") {
    linkList.map(link => {
      console.log(`Link ${i+=1}: ${link.file} ${chalk.green(link.href)} ${chalk.red(link.status)} ${link.text}`)
    })
  } else {
    linkList.map(link => {
      console.log(`Link ${i+=1}: ${link.file} ${chalk.green(link.href)} ${link.text}`)
    })
  }
};

// Execução
mdLinks(process.argv[2], process.argv[3])
  .then(result => showLinks(result))
  .catch(error => console.log(`Ocorreu um erro: ${error}`))