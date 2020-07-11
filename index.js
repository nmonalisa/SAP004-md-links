const readFile = require('./lib/file-reader');
const validateLink = require('./lib/validator');
const extractMdLinks = require('./lib/link-catcher');
const getFileRoute = require('./lib/setter-file-route');
const utils = require('./utils')

const mdLinks = function (Inputedpath, options) {
  return new Promise((resolve) => {
    const file = getFileRoute(Inputedpath);
    const text = readFile(file);
    const linkList = extractMdLinks(text, utils.regex, '](');
    linkList.forEach(link => link.file = file);

    if (options === '--validate') {
      validateLink(linkList)
        .then(result => resolve(result))
        .catch((error) => console.log(error.toJSON()))
    } else {
      resolve(linkList);
    }
  });
};

module.exports = mdLinks;