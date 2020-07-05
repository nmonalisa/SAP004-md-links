const axios = require('axios')


let meuLink = {
  status: ''
};

const validateLink = function (url, link) {
  axios.get(url).
  then(result => {
      console.log(result.status)
      result.status == 200 ? link.status = 'OK' : link.status = 'fail'
      console.log(link)
    })
    .catch(error => {
      console.log('Não foi possível validar o link');
    })

};
validateLink('https://www.udemy.com/', meuLink)



//Preciso extrair o servidor

// const validateLink = function (url) {
//     axios.get(url).then(response => {
//       response.status == 200 ? console.log('OK') : console.log('fail')
//     }).catch(() => console.log('O link não pode ser validado.'));
//   }
//   validateLink('https://wwww.google.com.br')