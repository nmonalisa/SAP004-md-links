const path = require('path');
const utils = require('../utils')

getFileRoute = (inputedPath) => {
  if (typeof inputedPath !== 'string') {
    console.log(utils.typeErrorMessage)
    throw new TypeError;
  } else {
    return path.resolve(process.cwd(), inputedPath)
  }
}

module.exports = getFileRoute;