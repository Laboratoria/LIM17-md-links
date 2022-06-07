const fetch = jest.createMockFromModule('node-fetch');
const { existRoute,convertToAbsolute,verifyDirectory,openedDirectory,filterFile,gettinlinks,statusLinks}= require('../src/md-links');

const routeRelative = "exampleFile";
const routeAbsolute = "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile";
const routeFalse = "C:\\Users\\Joss\\Documents\\GitHub\\exampleFile";
const folder = "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile";
const file =[ "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md"];
const notDirectory = "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\README.md";
const arrayEmpty=[];
const testFile ='C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\file.txt';
const testing =[
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\example.md", 
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\file.txt",
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\file.txt",
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\README.md"];
const testingmd =[
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder\\example.md", 
    "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\README.md"];

const validate = {
  href: 'https://www.youtube.com/watch?v=8GTaO9XhA5M',
  text: 'Java Script en 10 minutos',
  file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md',
  status: 200,
  ok: 'OK'
};
const dataTest =  [
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
]


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
    it("Debería filtrar una matriz y mantener solo archivos md",()=>{
      expect(filterFile(testing)).toEqual(testingmd)
    });
  });

  describe("gettinlinks",() =>{
    it("Debería mostrar una matriz con todos los enlaces de los archivos .md",() => {
    expect(gettinlinks(file)).toEqual(dataTest);
    });
  it("Debería mostrar una matriz vacía cuando está vacía", () => {
    expect(gettinlinks(testFile)).toEqual(arrayEmpty)
  });
  it("Debería mostrar y vaciar la matriz cuando no hay ningún enlace dentro del archivo .md",() => {
    expect(gettinlinks(routeAbsolute)).toEqual(arrayEmpty)
  });
  })

describe('statusLinks', ()=> {
  test('Debería mostrar una matriz con file, href, ok, status and text',() => {
  fetch.mockImplementation(() => Promise.resolve([{
      href: 'https://www.youtube.com/watch?v=8GTaO9XhA5M',
      text: 'Java Script en 10 minutos',
      file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md',
      status: 200,
      ok: 'OK'
}]))
return statusLinks([{
    href: 'https://www.youtube.com/watch?v=8GTaO9XhA5M',
    text: 'Java Script en 10 minutos',
    file: 'C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md',
    status: 200,
    ok: 'OK'
  }]).then((data)=>{
    expect(data).toEqual([validate]);
  });
});
});