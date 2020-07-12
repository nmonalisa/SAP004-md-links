const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('is a function', () => {
    expect(typeof mdLinks).toBe('function')
  })

  it('returns a list of links with three keys (href and name) from a file.md', () => {
    expect(mdLinks('./lib/test/testFile.md')).toEqual([{
      href: 'https: //nodejs.org/pt-br/',
      text: 'Node.js',
      file: '/home/monalinda/MEGA/DevWeb/bootcamps/Laboratoria/Projetos/Projeto4_MdLinks/SAP004-md-links/test/testFile.md'
    }])
  });
});