const readFile = require('./lib/file-reader');
const validateLink = require('./lib/validator');
const extractMdLinks = require('./lib/link-catcher');
const getFileRoute = require('./lib/setter-file-route');

const mdLinks = function (Inputedpath, options) {
  return new Promise((resolve) => {
    const file = getFileRoute(Inputedpath);

    readFile(file)
      .then(text => {
        const linkList = extractMdLinks(text, /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm, '](');
        linkList.forEach(link => link.file = file);

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