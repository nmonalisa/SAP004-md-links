const path = require('path');

const inputedPath = '/home/laboratoria/README.md';


getFileRoute = (inputedPath) => {
  // pegar caminho passado pelo usuario

  //testar se é absoluto
  //se sim, route = inputedPath
  if (path.isAbsolute(inputedPath)) {
    console.log(inputedPath)
    return inputedPath
  }

  //se é relativo: 
  //usar path.resolve ou path.relative
  // usar process.cdw para recuperar o caminho absoluto do dir
  //está no mesmo diretório?
  //se sim route = process.cwd + InputedPath menos o '.' do './'
  //está em diretórios acima do atual?

  //validar extensão do arquivo

}

//---- test

meuObjeto = {
  path: ''
}

meuObjeto.path = getFileRoute(inputedPath)
console.log(meuObjeto)