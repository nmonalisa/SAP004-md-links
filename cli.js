// Arquivo que invoca e executa a função mdLinks passando os inputs do usuário como valores dos parâmetros
const mdLinks = require('./index');
const path = process.argv[2];
const options = process.argv[3];

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
  url: ${link.href}
  descrição: ${link.text}
  caminho: '${link.path}'
  status: `)
  })
};

// Callback para insucesso da promisse
const catchError = function (error) {
  console.log(`Ocorreu um erro: ${error}`)
}

mdLinks(path, options)
  .then(result => showLinks(result))
  .catch(error => catchError(error));