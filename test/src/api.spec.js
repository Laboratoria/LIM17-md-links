import {routeExists, isAbsolute, convertToAbsolute, readFile, isFile, /*isDirectory*/ readDirectory, pullExtension, getRouteFileAndDirectory, getLinks} from '../../src/api.js'

const testRouteAbsolute = 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\prueba.md'
const testRouteExists = 'D:\\BOOTCAMP-GITHUB\\ReposCinthia\\LIM017-md-links'
const testRouteRelative = 'prueba.md'
const testDirectory = 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\src'
const testArrayDirectory = [ 'api.js', 'cli.js', 'md-links.js', 'statistics.js', 'util.js']
const arrayTestMd = [ 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\prueba.md' ]
const testLinks = ['D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md']
const testArrayObjectLinks =  [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md'
  }
]

describe('routeExists', () => {
    it('path should exist', () => {
      expect (routeExists(testRouteAbsolute)).toBe(true);
    });
    it('path should not exist', () => {
      expect (routeExists(testRouteExists)).toBe(false);
    });
});

describe('isAbsolute', () => {
  it('should be an absolute route', () => {
    expect (isAbsolute(testRouteAbsolute)).toBe(true);
  });
  it('should be a relative route', () => {
    expect (isAbsolute(testRouteRelative)).toBe(false);
  });
});

describe('convertToAbsolute', () => {
  it('should be an absolute route', () => {
    expect (convertToAbsolute(testRouteAbsolute)).toBe(testRouteAbsolute);
  });
  it('should be converted to absolute route', () => {
    expect (convertToAbsolute(testRouteRelative)).toBe(testRouteAbsolute);
  });
});

describe('readFile', () => {
  it('should read the content of a route', () => {
    expect (readFile(testRouteRelative)).toBe('Hi World');
  });
});

describe('isFile', () => {
  it('path should be a file', () => {
    expect (isFile(testRouteAbsolute)).toBe(true);
  });
  it('path should not be a file', () => {
    expect (isFile(testDirectory)).toBe(false);
  });
});

// describe('isDirectory', () => {
//   it('should be a directory', () => {
//     expect (typeof isDirectory(testRouteAbsolute)).toBe('boolean');
//   });
// });

describe('readDirectory', () => {
  it('should read a directory', () => {
    expect (readDirectory(testDirectory)).toEqual(testArrayDirectory);
  });
});

describe('pullExtension', () => {
  it('should give the name of the extension', () => {
    expect (pullExtension(testRouteAbsolute)).toBe('.md');
  });
});

describe('getRouteFileAndDirectory', () => {
  it('should return array with files MD', () => {
    expect (getRouteFileAndDirectory(testRouteAbsolute)).toEqual(arrayTestMd);
  });
  it('should return an empty array', () => {
    expect (getRouteFileAndDirectory(testDirectory)).toEqual([]);
  });
});

describe('getLinks', () => {
  it('should return array', () => {
    expect (getLinks(testLinks)).toEqual(testArrayObjectLinks);
  });
  it('should return an empty array', () => {
     expect (getLinks(arrayTestMd)).toEqual([]);
   });
});