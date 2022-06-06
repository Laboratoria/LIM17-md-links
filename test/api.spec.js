
const path = require('path');
const fs = require('fs');
const {
    routeExist,
    isDirectory,
   } = require('../src/api.js');

   const route = path.resolve('C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\README.md');
   const routeDirectory = path.resolve('C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\md-link');

   describe('routeExist', () => {
    it('retorna una extensión', () => {
      expect(routeExist(route)).toBe(true);
    });    
  });

  describe('routeIsDirec', () => {
    it('retorna true si la ruta es un directorio', () => {
      expect(isDirectory(routeDirectory)).toBe(true);
    });
    it('retorna false si la ruta no es un directorio', () => {
      expect(isDirectory(route)).toBe(false);
    });
  });
