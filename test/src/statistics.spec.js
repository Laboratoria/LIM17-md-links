import {stats, statsAndBroken } from '../../src/statistics.js'

const arrayTest = [
    {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md',
      status: 200,
      ok: 'Ok'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
      text: 'Funciones — bloques de código reutilizables - MDN',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md',
      status: 404,
      ok: 'Fail'
    },
    {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md'
    }
]

describe('stats', () => {
    it('should return the statistics of the links', () => {
      expect (stats(arrayTest)).toEqual('Total: 3\nUnique: 2');
    });
});

describe('statsAndBroken', () => {
    it('should return the total, unique and broken links', () => {
      expect (statsAndBroken(arrayTest)).toEqual('Total: 3\nUnique: 2\nBroken: 1');
    });
});