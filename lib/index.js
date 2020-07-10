const readFile = require('./file-reader');
const validateLink = require('./validator');
const extractMdLinks = require('./link-catcher');
const getFileRoute = require('./setter-file-route');


const mdLinks = function (Inputedpath, options) {
  return new Promise((resolve) => {
    const file = getFileRoute(Inputedpath)

    readFile(file)
      .then(text => {
        const regex = /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm
        const linkList = extractMdLinks(text, regex, '](')
        linkList.forEach(link => link.file = file)

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