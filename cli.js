// Arquivo que invoca e executa a função mdLinks passando os inputs do usuário como valores dos parâmetros
const mdLinks = require('./index');

const path = 'C://dir/.arquivo.md';
const options = 'true';

// Callback para sucesso da promisse
const showLinks = function ({ url, text, path }) {
  console.log(`
  -------------------------------
  Aqruivo lido com sucesso
  Meus links são:
  Url: ${url}
  Texto: ${text}
  Caminho: ${path} 
  --------------------------------
`)
};

// Callback para insucesso da promisse
const catchError = function (error) {
  console.log(`Ocorreu um erro: ${error}`)
}

mdLinks(path, options)
  .then((result) => {
    showLinks(result)
  })
  .catch((error) =>
    catchError(error)
  );