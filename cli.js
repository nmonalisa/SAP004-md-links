// Arquivo que invoca e executa a função mdLinks passando os inputs do usuário como valores dos parâmetros
const mdLinks = require('./index');
const path = process.argv[2];
const options = 'true';

// Callback para sucesso da promisse
const showLinks = function (linkList) {
  console.log(`
  Arquivo lido com sucesso!
  Total de links: ${linkList.length}`)
  let i = 0
  linkList.map(link => {
    console.log(`
  -------------------------------
  Link ${i+=1}
  Url: ${link.url}
  Texto: ${link.text}
  Caminho: '${link.path}'
  Status: "";
  -------------------------------`)
  })
};

// Callback para insucesso da promisse
const catchError = function (error) {
  console.log(`Ocorreu um erro: ${error}`)
}

mdLinks(path, options)
  .then(result => showLinks(result))
  .catch(error => catchError(error));