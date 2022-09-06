import {isAbsolute, routeToAbsolute, pathExists, getFileExtension} from '../index.js'

describe('isAbsolute', () => {
  it('Devuelve false si la ruta no es absoluta', () => {
      expect(isAbsolute('links.md')).toEqual(false);
      console.log(isAbsolute('links.md'));
});
it('Devuelve true si la ruta es absoluta', () => {
  expect(isAbsolute('C:/Users/carme/Documents/LABORATORIA/LIM017-md-links/links.md')).toEqual(true);    
});
})

describe('routeToAbsolute', () => {
  it('Convierte una ruta relativa a absoluta', () => {
      expect(routeToAbsolute('links.md')).toEqual('C:\\Users\\carme\\Documents\\LABORATORIA\\LIM017-md-links\\links.md');
});
})

describe('pathExists', () => {
  it('Devuelve true si la ruta existe', () => {
      expect(pathExists('links.md')).toEqual(true);
});
})

describe('getFileExtension', () => {
  it('Devuelve la extensión del archivo', () => {
      expect(getFileExtension('links.md')).toEqual('.md');
});
})
