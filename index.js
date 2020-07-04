// Contém a função principal e genérica (mdLinks) que manipula arquivos.md em busca de links

const fileContent = require('./reader')

const mdLinks = function (path, options) {
  return new Promise((resolve, reject) => {
    //receber o caminho de um arquivo(path) do usuário
    console.log(path);

    //receber as opções do usuário
    console.log(options);

    //ler o conteúdo do arquivo
    fileContent('./testFile.md').then(text => console.log('Meu texto é:', text)).catch(error => console.log('Ocorreu um erro:', error.code))


    //manipular o arquivo apontado pelo path
    //fileSystem.readFile

    //extrair as propriedades de cada link: url, text e path e guardar em um objeto
    const link = {
      url: 'www.meulink.com.br',
      text: 'Início do meu texto...',
      path
    }

    //fazer uma lista de todos os links (array de objetos)
    const linkList = new Array;

    linkList.push(link);

    //Callbacks para os casos de sucesso e insucesso
    let erro = false
    if (!erro) {
      resolve(linkList);
    } else {
      reject('descrição do erro');
    }
  });
};

//exportar módulo
module.exports = mdLinks;