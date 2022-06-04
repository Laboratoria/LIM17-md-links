// const axios = require('axios');
const { default: axios } = require('axios');
const { pathTransformAbs, isFile, pathExtension, isDirectory, linksIntoMdFiles, validatingLinks } = require('../utils.js');
const { get } = require('../__mocks__/axios.js');
jest.mock('axios');


const expected = 'C:\\Users\\USER\\Desktop\\laboratoria\\index.js';
const relativePath = '../index.js';
const file = 'utils.js';
const folder = 'file';
const routeMD = 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md';
const result = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Overview',
    text: 'Generalidades del protocolo HTTP - MDN',
    file: 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
    text: 'Mensajes HTTP - MDN',
    file: 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md'
  }
];
const statusOk =   [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Overview',
    text: 'Generalidades del protocolo HTTP - MDN',
    file: 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
    text: 'Mensajes HTTP - MDN',
    file: 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md',
    status: 200,
    ok: 'ok'
  }
]
const statusFail =   [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Overview',
    text: 'Generalidades del protocolo HTTP - MDN',
    file: 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md',
    status: 'fail',
    ok: 'fail'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
    text: 'Mensajes HTTP - MDN',
    file: 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md',
    status: 'fail',
    ok: 'fail'
  }
]



describe('pathTransformtoAbs', () => {
  it('convierte en rutas absolutas las rutas relativas que ingresen', () => {

    expect(pathTransformAbs(relativePath)).toEqual(expected);

  });
});

describe('isFile', () => {
  it('devuelve un booleano al validar la ruta', () => {
    // console.log(typeof isFile, 'estamos en isfile');
    expect(isFile(file)).toBe(true);


  });
});

describe('isDirectory', () => {
  it('devuelve un bolleano al validar si es una carpeta', () => {
    const isDirectory = () => {
      expect(isDirectory(file).toBe(false))
      expect(isDirectory(folder).toBe(true));
    }
  })
})
describe('linksIntoMdFiles', () => {
  it('return an object with a href, text, and file in windows', () => {

    expect(linksIntoMdFiles(routeMD)).toEqual(result);

  });
  it('return an empty arrey if no links exist', () => {
    const noMdsRoutes = 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\sinLikns.md';

    expect(linksIntoMdFiles(noMdsRoutes)).toEqual([]);
  });
});

describe('validatingLinks', () => {

  it('se espera que sea una función', () => {
    expect(typeof validatingLinks).toBe('function');
  });
  
});

    /*  --- testeando con mock de axios --- */

test('debería retornar un objeto con el estado de la promesa resuelta', async()=>{

const validate = await get(result);
expect(validate).not.toBe(null);
expect(validate).not.toBe(undefined);
expect(validate.length).toBe(1);
expect(validate[0].href).toBe(result[0].href);
expect(validate[0].text).toBe(result[0].text);
expect(validate[0].file).toBe(result[0].file);
expect(validate[0].status).toBe(200);
expect(validate[0].ok).toBe('ok');

});

describe('validatingLinks', () => {
  it( 'retorna un valor de "fail" cuando el links este roto', () => {
    validatingLinks(result).catch((response) => {
    expect(response).toEqual(statusFail);

    })
  });
});

// describe('validatingLinks', () => {
//   it( 'retorna un valor de "ok" cuando el links este roto', () => {
//     validatingLinks(result).then((response) => {
//     expect(response).toEqual(statusOk);
      
//     })
//   });
// });


