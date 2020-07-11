const path = require('path');
const utils = require('../utils')

getFileRoute = (inputedPath) => {
  if (typeof inputedPath !== 'string') {
    throw new TypeError(utils.typeErrorMessage)
  } else {
    return path.resolve(process.cwd(), inputedPath)
  }
}

module.exports = getFileRoute;