const utils = {
  regex: /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm,
  typeErrorMessage: 'O caminho do arquivo está vazio. Insira um caminho válido',
  zeroLinksMessage: 'Não há links no arquivo inserido.'
};

module.exports = utils;