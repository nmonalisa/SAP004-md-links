// Contém a função principal e genérica (mdLinks) que manipula arquivos.md em busca de links

const mdLinks = function (path, options) {
  return new Promise((resolve, reject) => {
    //receber o caminho de um arquivo(path) do usuário

    //receber as opções do usuário

    //manipular o arquivo apontado pelo path

    //fazer uma lista de todos os links (array de objetos)
    // const linkList = new Array;

    //extrair as propriedades de cada link: url, text e path e guardar em um objeto
    const link = {
      url: 'www.meulink.com.br',
      text: 'Início do meu texto...',
      path
    }

    //Callbacks para os casos de sucesso e insucesso
    let erro = false
    if (!erro) {
      resolve(link);
    } else {
      reject('código 5148484');
    }
  });
};

//exportar módulo
module.exports = mdLinks;