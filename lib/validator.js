const axios = require('axios')

const mergeStatus = (links, status) => {
  return links.map((link, index) => ({
    ...link,
    status: status[index]
  }))
}

//mudar sintaxe para deixar os retornos implicitos quando for possivel!
const validateLink = function (linklist) {
  return new Promise(resolve => {
    const validate = linklist.map(link => {
      return axios.get(link.href)
        .then(result => {
          return result.status === 200 && result.status < 309 ? `OK ${result.status}` : `fail ${result.status}`
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