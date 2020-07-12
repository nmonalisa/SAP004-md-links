const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('is a function', () => {
    expect(typeof mdLinks).toBe('function')
  })

  it('return a error if there is no argument', () => {
    expect(mdLinks()).rejects.toThrow(TypeError)
  });

  it('return a specific message if there is no link in the file', () => {
    const textWithoutLinks = 'texto sem links'
    expect(mdLinks(textWithoutLinks)).rejects.toEqual([])
  })

  it('return a list of links with keys text, href and file if argument validate is empty', () => {
    expect(mdLinks('./testFile.md')).resolves.toEqual({
      text: 'Node.js',
      href: 'https: //nodejs.org/pt-br/',
      file: './testFile.md'
    })
  })
});