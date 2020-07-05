// Contém a função principal e genérica (mdLinks) que manipula arquivos.md em busca de links

const readerFile = require('./reader')

const mdLinks = function (path, options) {
  return new Promise((resolve, reject) => {
    console.log('caminho escolhido:', path);
    console.log('opção escolhida:', options);

    //ler o conteúdo do arquivo
    readerFile(path)
      .then(text => {
        console.log(text)
          //extrair as propriedades de cada link: url, text e path e guardar em um objeto
          //chamar função específica pra isso
        const link = {
            url: 'www.meulink.com.br',
            text: text,
            path
          }
          //fazer uma lista de todos os links (array de objetos)
        const linkList = new Array;
        linkList.push(link);

        //Tratamento dos erros da promessa mdLinks
        let erro = false
        if (!erro) {
          resolve(linkList);
        } else {
          reject('descrição do erro');
        }
      })
      //Tratamento dos erros da promessa fileContent
      .catch(error => console.log('Ocorreu um erro: diretório ou arquivo não encontrado'))
  });
};

//exportar módulo
module.exports = mdLinks;