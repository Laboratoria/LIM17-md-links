const { existRoute,convertToAbsolute,verifyDirectory,openedDirectory,filterFile,gettinlinks,statusLinks}= require('../src/md-links');

const routeRelative = "exampleFile";
const routeAbsolute = "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile";
const routeFalse = "C:\\Users\\Joss\\Documents\\GitHub\\exampleFile";
const folder = "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile";
const file = "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder";
const notDirectory = "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\README.md";
const arrayEmpty=[];
const testing =[
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\example.md", 
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\file.txt",
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\file.txt",
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\README.md"];
const testingmd =[
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\example.md", 
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\README.md"];

const validate =[
  {
href:"https://developer.mozilla.org/es/docs/Web/HTTP/Caching",
file:"C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder",
text:"Markdow",
  }
];



describe('convertToAbsolute', () => {
  it('convertToAbsolute', () => {
          expect(convertToAbsolute(routeRelative)).toEqual(routeAbsolute);
      });
  });

  describe('existRoute is false ', () => {
    test('existRoute', () => {
      expect(existRoute(routeFalse)).toBe(false)
    });
    });
    
    describe('existsRoute is true', () => {
    test('existRoute', () => {
        expect(existRoute(routeRelative)).toBe(true)
    });
    });
  
describe("verifyDirectory",()=>{
it("retorna true si path es un directorio",()=>{
expect(verifyDirectory(routeAbsolute)).toBe(true);
});
it ("retorna false si path no es un directorio",()=>{
  expect(verifyDirectory(notDirectory)).toBe(false);
  });

});
    
describe("openedDirectory",()=>{
  it("Debería abrir un directorio y mostrar una matriz de archivos",()=> {
expect (openedDirectory(folder)).toEqual([
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\example.md",
 "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\file.txt",
  "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\file.txt",
   "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md",
 "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\README.md"]);
  });
});
    
  describe("filterFile",()=>{
    it("de  be filtrar una matriz y mantener solo archivos md",()=>{
      expect(filterFile(testing)).toEqual(testingmd)
    });
  });



describe('statusLinks', () => {
  it('Debe mostrar una matriz con archivo, href, ok, estatus y text', () => {
    return statusLinks(validate)
    .then(response  => {
      const data=[
        {
          "href":"https://developer.mozilla.org/es/docs/Web/HTTP/Caching",
          "file":"C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder",
          "text":"Markdow",
          "status":200,
          "message":"OK",   
      }
      ];
expect(response).toEqual(data);
    })
});
it ("La búsqueda falla con un error", () => {
  return statusLinks(arrayEmpty)
  .catch((err) => {
const error = err[
  {
    href:"https://developer.mozilla.org/es/docs/Web/HTTP/Caing",
    text:"Markdow",
    file:"C:\Users\Joss\Documents\GitHub\LIM017-md-links\exampleFile\anotherFolder",
    status:"404",
    ok: "fail"
}
];
expect(err).toEqual(error)
});
});
});

describe("gettinlinks",() =>{
  it("Debería mostrar una matriz con todos los enlaces de los archivos .md",() => {
    const data = [
      {
        href: 'https://www.youtube.com/watch?v=RqQ1d1qEWlE',
        text: 'Curso para principiantes de Java Script',
        file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\example.md'
      },
      {
        href: 'https://www.youtube.com/watch?v=8GTaO9XhA5M',
        text: 'Java Script en 10 minutos',
        file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\example.md'
      },
      {
        href: 'https://www.youtube.com/watch?v=FuCiNVP88pc',
        text: 'Java Script en 5 minutos o más',
        file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\example.md'
      },
      {
        href: 'https://nodej.org/api/fs.html#fs_fs_readfile_options_callback',
        text: 'Broken',
        file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\example.md'
      }
    ]
    ;
  expect(gettinlinks(file)).toEqual(data);
  });
it("Debe mostrar una matriz vacía cuando está vacía", () => {
  expect(gettinlinks(arrayEmpty)).toEqual(arrayEmpty)
});
it("Debe mostrar y vaciar la matriz cuando no hay ningún enlace dentro del archivo .md",() => {
  expect(gettinlinks(routeAbsolute)).toEqual(arrayEmpty)
});
})

  
