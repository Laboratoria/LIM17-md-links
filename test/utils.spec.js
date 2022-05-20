
const { pathTransformAbs ,isFile,
   pathExtension, 
   isDirectory}= require('../utils.js');


const expected = 'C:\\Users\\USER\\Desktop\\laboratoria\\index.js';
const relativePath = '../index.js';
const file = '../utils.js';
const folder = '../files';


describe('pathTransformtoAbs', () => {
  it('convierte en rutas absolutas las rutas relativas que ingresen', () => {
    
      expect(pathTransformAbs(relativePath)).toEqual(expected);
    
  });
});

describe('isFile', () => {
  it('devuelve un booleano al validar la ruta', () => {
    console.log(typeof isFile, 'estamos en isfile');
      expect(isFile(file)).toBe(true);
  
      
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
