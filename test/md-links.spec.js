//import { pathIsAbsolute } from
import operacionesApi from '../operacionesApi';

// FUNCIÓN EXISTE
describe('existsPath', () => {
  it('It shoud be a function', () => {
    expect(typeof operacionesApi.existsPath).toBe('function')
    })
  it('It shoud return true if the path exists', () =>{
    expect(operacionesApi.existsPath('./testFiles/prueba1.md')).toBe(true)
    })
  it('It shoud return false if the path doesnt exist', () => {
    expect(operacionesApi.existsPath('./testFiles/prueba100.md')).toBe(false)
    });
});

// TEST DE LA FUNCÓN IS ABSOLUTE
describe('pathIsAbsolute', () => {
  it('It shoud be a function', () => {
    expect(typeof operacionesApi.pathIsAbsolute).toBe('function')
    })
  const routeAbsolute = 'C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links\\testFiles\\prueba1.md';
  it('It shoud be an absolute path', () => {
    expect(operacionesApi.pathIsAbsolute('C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links\\testFiles\\prueba1.md')).toStrictEqual(routeAbsolute);
  });
  it('It shoud retrn an absolute path', () => {
    expect(operacionesApi.pathIsAbsolute('./testFiles/prueba1.md')).toBe(routeAbsolute);
  });
});

// *********** EL PATH ES UN DIRECTORIO? ***********
describe('pathIsDirectory', () => {
  it('It shoud be a function', () => {
    expect(typeof operacionesApi.pathIsAdirectory).toBe('function')
  });
  it('It shoud return true if the path is a directory', () => {
    expect(operacionesApi.pathIsAdirectory('C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links\\testFiles')).toBe(true)
  });
  it('It shoud return false if the path is a directory', () => {
    expect(operacionesApi.pathIsAdirectory('./testFiles/prueba1.md')).toBe(false)
  });
});

// *********** EL PATH ES UN ARCHIVO? ***********
describe('pathIsAfile', () => {
  it('It shoud be a function', () => {
    expect(typeof operacionesApi.pathIsAfile).toBe('function')
  });
  it('It shoud return false if the path is a directory', () => {
    expect(operacionesApi.pathIsAfile('C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links\\testFiles')).toBe(false)
  });
  it('It shoud return true if the path is a file', () => {
    expect(operacionesApi.pathIsAfile('./testFiles/prueba1.md')).toBe(true)
  });
});

// *********** RECORRER EL ARCHIVO ***********
describe('travelByDirectoryAndFile', () =>{
  it('It shoud be a function', () => {
    expect(typeof operacionesApi.travelByDirectoryAndFile).toBe('function')
  });
  it('It shoud travel by a directory, list and fiter by .md', () => {
    const result = [
      'testFiles\\prueba1.md',
      'testFiles\\prueba2.md',
      'testFiles\\pruebaFile\\fileTest.md'
    ];
    expect(operacionesApi.travelByDirectoryAndFile('testFiles')).toEqual(result);
  });
  it('It shoud list and filter a .md, return an array with an absolute array', () => {
  const arrayFile = ['C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links\\testFiles\\pruebaFile\\fileTest.md'];

  expect(operacionesApi.travelByDirectoryAndFile(operacionesApi.pathIsAbsolute('./testFiles/pruebaFile/fileTest.md'))).toEqual(arrayFile);
  })
});
