const path= require('path');
const {
  absolute_Path,
  existRoute,
  is_Directory,
  is_File,
  extname_Md,
  join_Routes ,
  md_Route,
  read_Directory,
  readFile
  }
= require('../src/index.js');

const route = path.resolve('./README.md');
const routeDirectory = path.resolve('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\src');
const manyFiles = ['C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba1.md',
'C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba2.md',
'C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba3.md'];
const routedirectory= 'C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba';
const routeFile = 'C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba1.md';

const files = ['prueba1.md', 'prueba2.md','prueba3.md'];

describe('existeRoute', () => {
  it('retorna una extensión, ejemplo .txt , .md', () => {
    expect(existRoute(route)).toBe(true);
  });    
});
describe('absolutePath', () => {
  it('debe retornar una ruta absoluta', () => {
    expect(absolute_Path('./README.md')).toBe(route);
  });
});

describe('isDirectory', () => {
    it('Verifica si es un directorio', () => {
        expect(is_Directory(routedirectory)).toBe(true);
    });
 });

describe('isDirec', () => {
    it('retorna true si la ruta es un directorio', () => {
      expect(is_Directory(routeDirectory)).toBe(true);
    });
    it('retorna false si la ruta no es un directorio', () => {
      expect(is_Directory(route)).toBe(false);
    });
  });
  describe('isFile', () => {
    it('retorna true si la ruta es un file', () => {
      expect(is_File('README.md')).toBe(true);
    });
    it('retorna false si la ruta no es un file', () => {
      expect(is_File(routeDirectory)).toBe(false);
    });
  });
  describe('extname_Md', () => {
    it('debe retornar true si la extensión es .md', () => {
      expect(extname_Md(route)).toBe('.md');
    });
  });
  describe('join_Routes', () => {
    it('Une dos rutas para retornar una lista de archivos en un array con join_Routes ', () => {
        expect(join_Routes ('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba')).toEqual(manyFiles);
    });
}); 
describe('md_Route', () => {
  it('Valida directorio, lista los archivos que encuentre y hace la búsqueda de archivos con md_Rout', () => {
      expect(md_Route('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba')).toEqual(manyFiles);
  });
});
describe('read_Directory', () => {
  it('Lee directorio en routeFolder', () => {
      expect(read_Directory(routedirectory)).toEqual(files);
  });
});
describe('read_file', () => {
  it('Lee directorio en routeFolder', () => {
      expect(readFile(routeFile)).toEqual('hola');
  });
});