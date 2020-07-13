# Markdown Links

## 1. Resumo do projeto

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc). É muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`). Porém, os arquivos `Markdown` ocasionalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

A proposta deste projeto foi criar um pacote que lê arquivos no formato _markdown_, extrai e valida os links que estão nele.
A  biblioteca e script executável do projeto (ferramenta de linha de comando - CLI) foram desenvolvidas em Javascript usando ambiente de desenvolvimento [Node.js](https://nodejs.org/pt-br/).


## 2.Funcionalidades

O comportamento padrão da biblioteca identifica o arquivo Markdown (a partir da rota que recebeu como
argumento), analisa o arquivo Markdown e imprime os links encontrados. A função principal (mdLinks) retorna uma promessa (`Promise`) que resolve um array  de objetos, onde cada objeto representa um link, contendo as seguintes
propriedades:

* `href`: URL encontrada.
* `text`: Texto que irá aparecer dentro de um link (`<a>`).
* `file`: Rota absoluta do arquivo onde foi encontrado o link.

O argumento opcional '--validate' acrescenta uma propriedade a cada link contendo informações da validação da url no servidor: 
* status code e status.message

## 3.Instalação

Para fazer a instalação a bliblioteca digite no terminal da sua máquina:
```
$ npm install nmonalisa/SAP004-md-links
```

A desisntalação pode ser feita pelo comando:
```
$ npm uninstall nmonalisa/SAP004-md-links
```


## 4.Uso

### 4.1.Ferramenta de Linha de Comando (CLI)
Para usar a biblioteca de qualquer local da sua máquina após a instalação, use o comando:
```
md-Links <caminho-do-arquivo> [--validate]
```

### 4.2.Interface do módulo principal (API)
Você também pode usar a biblioteca localmente importando o módulo principal em qualquer outro módulo Node.js através da interface:
```
mdLinks(path, options)
```

### 4.3.Argumentos
* `path`: rota absoluta ou relativa do arquivo. 
* `--validate`: string que determina se deseja validar no servidor os links encontrados.

## 5. Arquivos do projeto

* `README.md` documentação do módulo com instruções de instalação e uso.
* `index.js`: módulo principal que exporta a função `mdLinks`.
* `cli.js`: script executável.Importa , executa com os inputs do usuário e devolve o resultado do console.
* `lib/file-reader.js`: módulo que retorna o texto de um arquivo recebido através de um caminho relativo ou absoluto.
* `lib/link-catcher.js`: módulo que recebe o conteúdo de arquivo e retorna os links de acordo com um padrão de busca (expressão regular)
* `lib/setter-file-route.js`: módulo que resolve o caminho do arquivo passado.
* `lib/validator.js`: módulo que valida a url no servidor a inclui a propriedade 'status' ao objeto que representa o link.
* `package.json` deve possuir o nome, versão, descrição, autor, licença,
  dependências e scripts.
* `utils` contém informações gerais úteis para o desenvolvimento, como mensagens de erro e a expressão regular usada para encontrar links nos arquivos.md.
* `.editorconfig` com a configuração para o editor de texto. Este arquivo não
  deve ser alterado.
* `.eslintrc` com a configuração para o linter. Este arquivo não deve ser
  alterado.
* `.gitignore` para ignorar o `node_modules` e outras pastas que não devem
  ser incluídas no controle de versão (`git`).
* `test/md-links.spec.js` testes unitários para a função
  `mdLinks()`. A sua implementação deve rodar estes testes.


## 6. Próximos Passos
* Aperfeiçoar os testes utilizados para obter > 70% de cobertura
* Implementar o argumento opcional stats, com algumas estatísticas do arquivo
* Implementar suporte para diretórios
