const axios = require('axios')

const mergeStatus = (links, status) => {
  return links.map((link, index) => ({
    ...link,
    status: status[index]
  }))
}

const validateLink = function (linklist) {
  return new Promise(resolve => {
    const validate = linklist.map(link => {
      return axios.get(link.href)
        .then(result => {
          return result.status === 200 ? 'OK' : 'fail'
        })
        .catch(() => {
          return 'fail'
        });
    })
    Promise.all(validate)
      .then(result => {
        resolve(mergeStatus(linklist, result));
      })
  })
};

module.exports = validateLink;