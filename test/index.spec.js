
const { pathTransformAbs ,isFile,
   pathExtension, 
   isDirectory}= require('../utils.js');


const expected = 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\index.js';
const relativePath = '../index.js';
const file = './utils.js';
const folder = './files';


describe('pathTransformtoAbs', () => {
  it('convierte en rutas absolutas las rutas relativas que ingresen', () => {
    setTimeout(() => {
      expect(pathTransformAbs(relativePath)).toEqual(expected);
    }, 600)
  });
});

describe('isFile', () => {
  it('devuelve un booleano al validar la ruta', () => {
    setTimeout(()=>{
      expect(isFile(file)).toBe(true);
    }, 600)
      
  });
});

describe('isDirectory', () =>  {
  it('devuelve un bolleano al validar si es una carpeta', () => {
    const isDirectory = () => {
      expect(isDirectory(file).toBe(false))
      expect(isDirectory(folder).toBe(true));
    }
  })
})
