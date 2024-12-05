const path= require('path');
const {
  absolutePath,
  existRoute,
  isDirectory,
  isFile,
  extnameMd,
  joinRoutes ,
  mdRoute,
  readDirectory,
  readFile,
  getLinks,
  getLinksStatus,
  }
= require('../src/index.js');

const route = path.resolve('./README.md');
const routeDirectory = path.resolve('prueba');
const manyFiles = ['C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba1.md',
'C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba2.md',
'C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba3.md'];
const routedirectory= 'C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba';
const routeFile = 'C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba1.md';

const files = ['prueba1.md', 'prueba2.md','prueba3.md'];
const mdLinks={
  
    href: 'https://www.linkedin.com/feed/',
    text: 'https://www.linkedin.com/feed/',
    file: path.resolve('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba2.md'),
  };
  

const mdLinksWithStatus = 
  {
    href: 'https://www.linkedin.com/feed/',
    text: 'https://www.linkedin.com/feed/',
    file:  path.resolve('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba2.md'),
    status: 200,
    message: 'ok'
  };
  

 
describe('existeRoute', () => {
  it('retorna una extensión, ejemplo .txt , .md', () => {
    expect(existRoute(route)).toBe(true);
  });    
});
describe('absolutePath', () => {
  it('debe retornar una ruta absoluta', () => {
    expect(absolutePath('./README.md')).toBe(route);
  });
});

describe('isDirectory', () => {
    it('retorna true si la ruta es un directorio', () => {
      expect(isDirectory(routeDirectory)).toBe(true);
    });
    it('retorna false si la ruta no es un directorio', () => {
      expect(isDirectory(route)).toBe(false);
    });
  });
  describe('isFile', () => {
    it('retorna true si la ruta es un file', () => {
      expect(isFile('README.md')).toBe(true);
    });
    it('retorna false si la ruta no es un file', () => {
      expect(isFile(routeDirectory)).toBe(false);
    });
  });
  describe('extnameMd', () => {
    it('debe retornar true si la extensión es .md', () => {
      expect(extnameMd(route)).toBe('.md');
    });
  });
  describe('joinRoutes', () => {
    it('Une dos rutas para retornar una lista de archivos en un array con join_Routes ', () => {
        expect(joinRoutes ('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba')).toEqual(manyFiles);
    });
}); 
describe('mdRoute', () => {
  it('Valida directorio, lista los archivos que encuentre y hace la búsqueda de archivos con md_Rout', () => {
      expect(mdRoute('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba')).toEqual(manyFiles);
  });
});
describe('readDirectory', () => {
  it('Lee directorio en routedirectory', () => {
      expect(readDirectory(routedirectory)).toEqual(files);
  });
});
describe('readfile', () => {
  it('Lee directorio en readFile', () => {
      expect(readFile(routeFile)).toEqual('hola');
  });
});
it('Retorna false al no encontrar archivos MD', () => {
  expect(mdRoute('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\src\\index.js')).toBe(false);
});
describe('getLinks', () => {
  it('retorna un array de solo archivos .md que contengan links con las propiedades de los mismos', () => {
    expect(getLinks(routeDirectory)).toEqual([mdLinks])
  });
});

describe ('getLinksStatus', () => {
  it('retorna el mismo array de getLinks, pero con el status del link', () =>{
      return expect(getLinksStatus([mdLinks])).resolves.toStrictEqual([mdLinksWithStatus])
  });
});


