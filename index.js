const { readFileSync } = require('fs')
const validateLink = require('./lib/validator');
const extractMdLinks = require('./lib/link-catcher');
const path = require('path');

//---- 
const getFileRoute = inputedPath => typeof inputedPath === 'string' ? path.resolve(process.cwd(), inputedPath) : false;

const readFile = path => readFileSync(path, 'utf-8');
//----

const mdLinks = function (Inputedpath, options) {
  return new Promise((resolve) => {
    const file = getFileRoute(Inputedpath);
    const text = readFile(file);
    const regex = /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm;
    const links = extractMdLinks(text, regex);
    const completeLinks = []
    if (links !== []) {
      const splitedLinks = links.map(link => link.split(']('))
      splitedLinks.forEach(item => {
        completeLinks.push({
          text: item[0].slice(1),
          href: item[1].slice(0, -1),
          file
        })
      })
    } else {
      resolve(links)
    }
    if (options === '--validate') {
      validateLink(completeLinks)
        .then(result => resolve(result))
        .catch((error) => console.log(error.toJSON()))
    } else {
      resolve(completeLinks);
    }
  });
};
module.exports = mdLinks;