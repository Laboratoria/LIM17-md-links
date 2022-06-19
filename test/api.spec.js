
const fetch = jest.createMockFromModule('node-fetch');
const path = require('path');
const fs = require('fs');
const {
  routeExist,
  absoluteroute,
  isDirectory,
  verifyIsFile,
  markdExt,
  readDirectory,
  doublePath,
  mdRoute,
  readingFile,
  getLinksStatus,
  getLinks,
   } = require('../src/api.js');
const { marked } = require('marked');

   const route = path.resolve('C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\README.md');
   const routeDirectory = path.resolve('C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\md-link');
   const files= ['links.md', 'links2.md', 'links3.md'];
   const urlPr= 'https://www.oxfordlearnersdictionaries.com/';
   const routeDirectory2= path.resolve('C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\md-link\\links.md');
   const routesFiles = [
    path.resolve('./md-link/links.md'),
    path.resolve('./md-link/links2.md'),
    path.resolve('./md-link/links3.md'),
      ];
      const routeDirectorytest= [
        'C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\md-link\\links.md',
        'C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\md-link\\links2.md',
        'C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\md-link\\links3.md'
      ]
const routeFile= 'C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\md-link\\links.md';
   const markdlinkstest={
      href: 'https://www.oxfordlearnersdictionaries.com/',
      text: 'https://www.oxfordlearnersdictionaries.com/',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\md-link\\links.md',
     
    };
  
  
   const mdLinksWithStatus ={
      href: 'https://www.oxfordlearnersdictionaries.com/',
      text: 'https://www.oxfordlearnersdictionaries.com/',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\md-link\\links.md',
      status: 200,
      message: 'ok'
    };

  describe('routeExist', () => {
    it('retorna una extensión, ejemplo .txt , .md', () => {
      expect(routeExist(route)).toBe(true);
    });    
  });
  describe('absoluteroute', () => {
    it('debe retornar una ruta absoluta', () => {
      expect(absoluteroute('./README.md')).toBe(route);
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
    describe('verifyIsFile', () => {
      it('true si la ruta es un file', () => {
        expect(verifyIsFile(route)).toBe(true);
      });
      it('false si la ruta no es un file', () => {
        expect(verifyIsFile(routeDirectory)).toBe(false);
      });
    });
    describe('markdExt', () => {
      it('debe retornar true si la extensión es .md', () => {
        expect(markdExt(route)).toBe('.md');
      });
    });
    describe('doublePath', () => {
      it('Une dos rutas para retornar una lista de archivos en un array con join_Routes ', () => {
          expect(doublePath(routeDirectory)).toEqual(routesFiles);
      });
  }); 
  describe('mdRoute', () => {
    it('Valida directorio, lista los archivos que encuentre y hace la búsqueda de archivos con md_Rout', () => {
        expect(mdRoute(routeDirectory)).toEqual(routesFiles);
    });
  });
  describe('readDirectory', () => {
    it('Lee directorio en routedirectory', () => {
        expect(readDirectory(routeDirectory)).toEqual(files);
    });
  });
  describe('readingfile', () => {
    it('Lee directorio en readingFile', () => {
        expect(readingFile(routeFile)).toEqual(urlPr);
    });
  });
  //it('Retorna false al no encontrar archivos MD', () => {
    //expect(mdRoute('C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\src\\api.js')).toBe(false);
  //});
  
  describe('getLinks', () => {
    it(' solo archivos .md qconlinks con las propiedades de los mismos', () => {
      expect(getLinks(routeDirectory2)).toEqual([markdlinkstest])
    });
  });
  describe ('getLinksStatus', () => {
    it('retorna el mismo array de getLinks, pero con el status del link', () =>{
        return expect(getLinksStatus([markdlinkstest])).resolves.toEqual([mdLinksWithStatus])
    });
  });