const readFile = require('./lib/file-reader');
const validateLink = require('./lib/validator');
const extractMdLinks = require('./lib/link-catcher');
const getFileRoute = require('./lib/setter-file-route');
const utils = require('./utils')
const path = require('path');

getFileRoute = inputedPath => typeof inputedPath === 'string' ? path.resolve(process.cwd(), inputedPath) : false;


const mdLinks = function (Inputedpath, options) {
  return new Promise((resolve) => {
    const file = getFileRoute(Inputedpath);
    const text = readFile(file);
    const links = extractMdLinks(text, utils.regex);
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