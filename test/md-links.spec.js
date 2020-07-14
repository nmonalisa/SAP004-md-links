const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('is a function', () => {
    expect(typeof mdLinks).toBe('function')
  })

  it('return a error if there is no argument', () => {
    expect(mdLinks()).rejects.toThrow(TypeError)
  });

  // it('return a specific message if there is no link in the file', () => {
  //   expect(mdLinks(textWithoutLinks)).rejects.toEqual([])
  // })

  it('return a list of links with keys text, href and file if argument validate is empty', () => {
    expect(mdLinks('./test/testFile.md')).resolves.toEqual([{
      text: 'Node.js',
      href: 'https://nodejs.org/pt-br/',
      file: '/home/monalinda/MEGA/DevWeb/bootcamps/Laboratoria/Projetos/Projeto4_MdLinks/SAP004-md-links/test/testFile.md'
    }])
  })
});