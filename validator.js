const axios = require('axios')

let meuLink = {
  href: 'https://www.udemy.com/',
  status: ''
};

const validateLink = function (link) {
  axios.get(link.href)
    .then(result => {
      result.status == 200 ? link.status = 'OK' : link.status = 'fail'
      console.log(result.status)
      console.log(link)
    })
    .catch(() => console.log('Não foi possível validar o link'));

};
validateLink(meuLink)