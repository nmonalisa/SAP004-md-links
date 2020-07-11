const utils = {
  regex: /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm,
  typeErrorMessage: 'Erro: você deve inserir um caminho de arquivo válido',
  zeroLinksMessage: 'Não há links no arquivo inserido.'
};

module.exports = utils;