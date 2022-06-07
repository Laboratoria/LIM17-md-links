const{mdLinks }=require('../src/index');

const fetch = jest.createMockFromModule('node-fetch');

const error=" ⛔️ La entrada de ruta no existe, ingrese otra ruta.";
const pathError = "C:\\Users\\Joss\\Documents\\GitHub\\exampleFile";
const file = "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md";
const objDat =[{
  
    href: 'https://www.youtube.com/watch?v=RqQ1d1qEWlE',
    text: 'Curso para principiantes de Java Script',
    file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: 'https://www.youtube.com/watch?v=8GTaO9XhA5M',
    text: 'Java Script en 10 minutos',
    file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: 'https://www.youtube.com/watch?v=FuCiNVP88pc',
    text: 'Java Script en 5 minutos o más',
    file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md',
    status: 200,
    ok: 'OK'
  },
{
    href: 'https://nodej.org/api/fs.html#fs_fs_readfile_options_callback',
    text: 'Broken',
    file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md',
    status: 'Failed request',
    ok: 'undefined'
  }
];

const data =[[{
  "file": "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder",
 "href": "https://developer.mozilla.org//es/docs/Web/HTTP/Caching",
 "text": "Markdow"
}]]

const objData =[
  {
    href: 'https://www.youtube.com/watch?v=RqQ1d1qEWlE',
    text: 'Curso para principiantes de Java Script',
    file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md'
  },
  {
    href: 'https://www.youtube.com/watch?v=8GTaO9XhA5M',
    text: 'Java Script en 10 minutos',
    file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md'
  },
  {
    href: 'https://www.youtube.com/watch?v=FuCiNVP88pc',
    text: 'Java Script en 5 minutos o más',
    file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md'
  },
{
    href: 'https://nodej.org/api/fs.html#fs_fs_readfile_options_callback',
    text: 'Broken',
    file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md'
  }
];


    describe("mdLinks,(file)",() =>{
      it('Debería retornar los links que se encuetran destro de la ruta que se ingresa',() => {
        return mdLinks(file).then(data => {
        expect(data).toEqual(objData);
      });
    });
    });
    describe('mdLinks(file, true)', () => {
    test('Debería retornar True si se encuentran los links destro de la ruta que se ingresa', () => {
      return mdLinks(file,true).then(data => {
          expect(data).toEqual(objData);
        });
      });
    });
        describe('mdLinks(pathError)', () => {
            test('Debería devolver una leyenda de error cuando se u=ingrese una ruta erronea', () => {
                return mdLinks(pathError).catch(data => {
                    expect(data).toBe(error);
                });
                 });
            });
            it('mdLinks', () => {
              const result = mdLinks('exampleFile\folder.md')
              result.then((res)=> expect(res).toStrictEqual('⛔️ El directorio está vacío, ingrese otra ruta.')).catch((rej)=>rej);
  });

  it('Debería retornar mensaje de error,⛔️ La entrada de ruta no existe, ingrese otra ruta.', () => {
    return mdLinks('exampleFile\anotherFolder', { validate: true, stats: true })
      .catch((err) => {
        expect(err).toEqual(" ⛔️ La entrada de ruta no existe, ingrese otra ruta.");
      });
  });
  it('Debería retornar mensaje de error, " ⛔️ La entrada de ruta no existe, ingrese otra ruta.', () => {
    return mdLinks('exampleFile\anotherFolder\file.txt', { validate: false, stats: true })
      .catch((err) => {
        expect(err).toBe(" ⛔️ La entrada de ruta no existe, ingrese otra ruta.");
      });
  });

  it('Debería retornar mensaje de error, " ⛔️ La entrada de ruta no existe, ingrese otra ruta."', () => {
    return mdLinks('exampleFile/cli', { validate: false, stats: true })
      .catch((err) => {
        expect(err).toBe(" ⛔️ La entrada de ruta no existe, ingrese otra ruta.");
      });
    });
  //'exampleFile\folder.md'