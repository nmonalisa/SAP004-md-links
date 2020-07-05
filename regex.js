const regex = /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm;
// regex j = 
const str = `
## 5. Ferramentas utilizadas :wrench:
* [Node.js](https://nodejs.org/en/) - plataforma de desenvolvimento.
* [VSCode](https://code.visualstudio.com/) - editor de texto
* [NPM](https://www.npmjs.com/) - gerenciador de pacotes
* [Jest](https://jestjs.io/pt-BR/) - framework de testes unitários
* [Figma](https://www.figma.com/) e [MarvelApp Maoihahaha](https://marvelapp.com/) - plataforma de prototipagem
* [Trello](https://trello.com/pt-BR) - gerenciador de projeto
`


let linkList = [];
str.match(regex).map(item => {
  const splitedContent = item.split('](');
  linkList.push({
    href: splitedContent[1].slice(0, -1),
    text: splitedContent[0].slice(1).substr(0, 50),
  })
})
console.log(linkList)