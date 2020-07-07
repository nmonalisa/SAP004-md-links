const axios = require('axios')

// let meuLink = [{
//     href: 'https://www.udemy.com/',
//     text: 'Udemy',
//     status: ''
//   },
//   {
//     href: 'https://www.google.com/',
//     text: 'Google',
//     status: ''
//   }
// ];

const validateLink = function (linklist) {
  return new Promise(resolve => {
    linklist.map(link => {
      axios.get(link.href)
        .then(result => {
          result.status === 200 ? link.status = 'OK' : link.status = 'fail'
          console.log(link.status)
        })
        .catch(() => console.log('Não foi possível validar este link no servidor'));
    })
    resolve(linklist)
  })
};

// validateLink(meuLink).then(result => resolve(result)).catch((error) => console.log(error))


module.exports = validateLink;