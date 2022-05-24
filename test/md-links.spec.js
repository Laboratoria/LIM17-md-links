//import { pathIsAbsolute } from
import operacionesApi from '../operacionesApi';

// FUNCIÓN EXISTE
describe('existsPath', () => {
  it('It shoud be a function', () => {
    expect(typeof operacionesApi.existsPath).toBe('function')
    })
  it('It shoud return true if the path exists', () =>{
    expect(operacionesApi.existsPath('prueba1.md')).toBe(true)
    })
  it('It shoud return false if the path doesnt exist', () => {
    expect(operacionesApi.existsPath('pruebaxd01D.md')).toBe(false)
    });
});

// TEST DE LA FUNCÓN IS ABSOLUTE
describe('pathIsAbsolute', () => {
  it('It shoud be a function', () => {
    expect(typeof operacionesApi.pathIsAbsolute).toBe('function')
    })
  const routeAbsolute = 'C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links\\prueba1.md';
  it('It shoud be an absolute path', () => {
    expect(operacionesApi.pathIsAbsolute('C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links\\prueba1.md')).toStrictEqual(routeAbsolute);
  });
  it('It shoud retrn an absolute path', () => {
    expect(operacionesApi.pathIsAbsolute('./prueba1.md')).toBe(routeAbsolute);
  });
});

// *********** EL PATH ES UN DIRECTORIO? ***********
describe('pathIsDirectory', () => {
  it('It shoud be a function', () => {
    expect(typeof operacionesApi.pathIsAdirectory).toBe('function')
  });
  it('It shoud return true if the path is a directory', () => {
    expect(operacionesApi.pathIsAdirectory('C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links')).toBe(true)
  });
  it('It shoud return false if the path is a directory', () => {
    expect(operacionesApi.pathIsAdirectory('prueba1.md')).toBe(false)
  });
});

// *********** EL PATH ES UN ARCHIVO? ***********
describe('pathIsAfile', () => {
  it('It shoud be a function', () => {
    expect(typeof operacionesApi.pathIsAfile).toBe('function')
  });
  it('It shoud return false if the path is a directory', () => {
    expect(operacionesApi.pathIsAfile('C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links')).toBe(false)
  });
  it('It shoud return true if the path is a file', () => {
    expect(operacionesApi.pathIsAfile('prueba1.md')).toBe(true)
  });
});
