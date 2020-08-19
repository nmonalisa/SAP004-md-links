const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('is a function', () => {
    expect(typeof mdLinks).toBe('function')
  })

  // trocar para a sintaxe de promisses usando then e done()
  it('return a empty list if there is no link in the file', () => {
    expect(mdLinks('./test/testFile-no-links.md')).resolves.toEqual([])
  })

  it('return a list of links with keys text, href and file if argument option is empty', () => {
    expect(mdLinks('./test/testFile.md')).resolves.toEqual([{
      text: 'Node.js',
      href: 'https://nodejs.org/pt-br/',
      file: '/home/monalinda/MEGA/DevWeb/bootcamps/Laboratoria/Projetos/Projeto4_MdLinks/SAP004-md-links/test/testFile.md'
    }])
  })
});