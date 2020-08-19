# Markdown Links

## 1. Resumo do projeto

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores e usada em diversas plataformas que
manipulam texto (GitHub, fórum, blogs e etc). Apesar de ser muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`), arquivos `Markdown` ocasionalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

A proposta deste projeto foi criar uma biblioteca que lê, extrai e valida links que estão em um arquivo markdown. A  biblioteca e script executável do projeto foram desenvolvidas em Javascript usando ambiente de desenvolvimento [Node.js](https://nodejs.org/pt-br/).


## 2.Funcionalidades

O comportamento padrão da biblioteca é identificar o arquivo a partir da rota recebida como argumento, analisar o arquivo e imprimir no console os links encontrados. A função principal (mdLinks) retorna uma promessa (`Promise`) que resolve um array  de objetos, onde cada objeto representa um link com as seguintes
propriedades:

* `href`: URL encontrada.
* `text`: Texto que descreve o link (truncado em 50 caracteres).
* `file`: Rota absoluta do arquivo onde foi encontrado o link.

O argumento opcional '--validate' acrescenta uma propriedade aos links com as seguintes informações de validação do servidor: 
* código do status
* mensagem do status



## 3.Instalação da biblioteca

No terminal da sua máquina use o comando:
```
$ npm install nmonalisa/SAP004-md-links
```

A desisntalação pode ser feita pelo comando:
```
$ npm uninstall nmonalisa/SAP004-md-links
```


## 4.Uso

#### 4.1.Ferramenta de Linha de Comando (CLI)
Para usar a biblioteca de qualquer local da sua máquina, use o comando:
```
md-links <caminho-do-arquivo> [--validate]
```

#### 4.2.Interface do módulo principal (API)
Você também pode usar a biblioteca localmente importando o módulo principal em qualquer outro módulo Node.js através da interface:
```
mdLinks(path, options)
```

__Descrição dos argumentos do módulo principal__:
* `path`: rota absoluta ou relativa do arquivo. 
* `--validate`: string que determina se deseja validar os links encontrados no servidor.

#### 4.3.Resultado final:
[Terminal:]('./assets/mdlinks.png')



## 5. Arquivos do projeto
* `README.md` documentação do módulo com instruções de instalação e uso.
* `index.js`: módulo principal que exporta a função `mdLinks`.
* `cli.js`: script executável que importa a função `mdLinks` e executa com os inputs do usuário, devolvendo o resultado no console.
* `lib/link-catcher.js`: módulo que recebe o conteúdo do arquivo e retorna os links de acordo com um padrão de busca (expressão regular)
* `lib/validator.js`: módulo que valida a url no servidor a inclui a propriedade 'status' ao objeto que representa o link.
* `package.json` informações gerais, dependências e scripts do projeto.
* `.editorconfig` configuração para o editor de texto.
* `.eslintrc` com a configuração para o linter.
* `.gitignore` para ignorar o `node_modules` e outras pastas que não devem ser incluídas no controle de versão (`git`).
* `test/md-links.spec.js` testes unitários para a função `mdLinks()`.
  


## 6. Próximos Passos
* Aperfeiçoar os testes utilizados para obter mínimo de 70% de cobertura
* Implementar o argumento opcional `stats`, com algumas estatísticas do arquivo e dos links
* Implementar suporte para diretórios


## 7. Autoria
Desenvolvido por Nathalia Monalisa durante o bootcamp de Programação Front-End da Laboratória.<br>
Contato: nathaliamonalisa@gmail.com
