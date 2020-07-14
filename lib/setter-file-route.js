const path = require('path');

getFileRoute = inputedPath => typeof inputedPath === 'string' ? path.resolve(process.cwd(), inputedPath) : false;

module.exports = getFileRoute;