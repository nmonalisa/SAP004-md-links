const path = require('path');

getFileRoute = (inputedPath) => {
  if (path.isAbsolute(inputedPath)) {
    return inputedPath
  } else {
    return path.resolve(process.cwd(), inputedPath)
  }
}

module.exports = getFileRoute;