const mdLinks = require('../index.js');
const readFile = require('../lib/file-reader');
const validateLink = require('../lib/validator');
const extractMdLinks = require('../lib/link-catcher');
const getFileRoute = require('../lib/setter-file-route'); //OK 75
const utils = require('../utils')


// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });

// -------------------

describe('extractMdLinks', () => {
  it('should be a function', () => {
    expect(extractMdLinks).toBeInstanceOf(Function)
  })

  it('should returns a list of links with name and href keys when there is some link in the file', () => {
    const myText = 'There are links in my text: [myLinks](https://www.any.br)'
    const result = [{
      href: 'https://www.any.br',
      text: 'myLinks'
    }]
    expect(extractMdLinks(myText, utils.regex, '](')).toEqual(result);
  })
});

// -------------------

describe('getFileRoute', () => {
  it('should be a function', () => {
    expect(getFileRoute).toBeInstanceOf(Function)
  })

  it('should throw a TypeError with specific message if argument is undefined', () => {
    const message = utils.typeErrorMessage
    try {
      getFileRoute()
    } catch (error) {
      expect(error.message).toBe(message)
    }
  })

  it('should returns an absolut path when it receives an absolut path', () => {
    const path = '/home/myDir/myFile.md'
    expect(getFileRoute(path)).toEqual(path)
  });

  it('should returns an resolved absolute path when it receives an relative path', () => {
    const path = '../../myFile.md'
    expect(getFileRoute(path)).toEqual("/home/monalinda/MEGA/DevWeb/bootcamps/Laboratoria/Projetos/myFile.md")
  });
});