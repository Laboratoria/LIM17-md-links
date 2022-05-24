const { pathTransformAbs, isFile,  pathExtension, isDirectory, linksIntoMdFiles } = require('../utils.js');


const expected = 'C:\\Users\\USER\\Desktop\\laboratoria\\index.js';
const relativePath = '../index.js';
const file = 'utils.js';
const folder = 'file';


describe('pathTransformtoAbs', () => {
  it('convierte en rutas absolutas las rutas relativas que ingresen', () => {

    expect(pathTransformAbs(relativePath)).toEqual(expected);

  });
});

describe('isFile', () => {
  it('devuelve un booleano al validar la ruta', () => {
    // console.log(typeof isFile, 'estamos en isfile');
    expect(isFile(file)).toBe(true);


  });
});

describe('isDirectory', () => {
  it('devuelve un bolleano al validar si es una carpeta', () => {
    const isDirectory = () => {
      expect(isDirectory(file).toBe(false))
      expect(isDirectory(folder).toBe(true));
    }
  })
})
describe('linksIntoMdFiles', () => {
  it('return an object with a href, text, and file in windows', () => {
    const result = [  {
      href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Overview',
      text: 'Generalidades del protocolo HTTP - MDN',
      file: 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
      text: 'Mensajes HTTP - MDN',
      file: 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md'
    }
  ]

    const routeMD = 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md';
    
    expect(linksIntoMdFiles(routeMD)).toEqual(result);

  });
  it('return an empty arrey if no links exist', () => {
    const noMdsRoutes ='C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\sinLikns.md';

    expect(linksIntoMdFiles(noMdsRoutes)).toEqual([]);
  });
});