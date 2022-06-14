const {mdLinks} = require('../src/mdLinks.js');
const path = require('path')
const mdLinksReject = [
  {
    href: 'https://www.oxfordlearnersdictionaries.com/',
    text: 'https://www.oxfordlearnersdictionaries.com/',
    file: path.resolve('./md-link/links.md')
  },
  {
    href: 'https://www.codewars.com/dashboard',
    text: 'https://www.codewars.com/dashboard',
    file: path.resolve('./md-link/links2.md')
  },
  {
    href: 'https://mail.google.com/mail/u/0/#inbox',
    text: 'https://mail.google.com/mail/u/0/#inbox',
    file: path.resolve('./md-link/links3.md')
  },
  {
    href: 'https://regexr.com/',
    text: 'https://regexr.com/',
    file: path.resolve('./md-link/links3.md')
  },
  
]

const mdLinksWithStatus = [
  {
    href: 'https://www.google.com.pe/',
    text: 'https://www.google.com.pe/',
    file: 'C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\prueba4.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://www.it-swarm-es.com/',
    text: 'https://www.it-swarm-es.com/',
    file: 'C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\prueba4.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://es.stackoverflow.com/',
    text: 'https://es.stackoverflow.com/',
    file: 'C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\prueba4.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://bitly.com/404-error-page',
    text: 'https://bitly.com/404-error-page',
    file: 'C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\prueba4.md',
    status: 404,
    message: 'fail'
  }
]


describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
});
it('debe retornar un mensaje, advirtiendo que la ruta no existe', ()=>{
  const resultado = mdLinks('../prueba')
  resultado.then((res)=> expect(res).toStrictEqual('Path does not exist')).catch((rej)=>rej);
});
it('debe retornar un mensaje, advirtiendo que no hay archivos .md', ()=>{
const resultado = mdLinks('./src')
resultado.then((res)=> expect(res).toStrictEqual('There is no md files')).catch((rej)=>rej);
});
it('debe retornar un mensaje, advirtiendo que no hay links', ()=>{
const resultado = mdLinks('../.md')
resultado.then((res)=> expect(res).toStrictEqual('There is no links')).catch((rej)=>rej);
});
it('debe retornar en un array de objetos con las propiedades de los links, pertenecientes solo a archivos .md de la ruta que se ingresa, cuando no ha sido validado (options)', () => {
  const resultado = mdLinks(('./md-link'),{ validate: false });
  resultado.then((res) => expect(res).toStrictEqual(mdLinksReject));
});
it('debe retornar en un array de objetos con las propiedades de los links más sus status pertenecientes solo a archivos .md de la ruta que se ingresa si ha sido validado (options)', () => {
  const resultado = mdLinks(('./prueba4.md'),{ validate: true });
  resultado.then((res) => expect(res).toStrictEqual(mdLinksWithStatus));
});
