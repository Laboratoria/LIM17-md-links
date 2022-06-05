const{mdLinks }=require('../src/index');
jest.mock('node-fetch', () => jest.fn());


const error=" ⛔️ La entrada de ruta no existe, ingrese otra ruta.";
const pathError = "C:\\Users\\Joss\\Documents\\GitHub\\exampleFile";
const file = "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md";
const objData =[{
  file: "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder",
  href: "https://developer.mozilla.org/es/docs/Web/HTTP/Caching",
  text: "Markdow"
  },
];

const data =[[{
  "file": "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder",
 "href": "https://developer.mozilla.org/es/docs/Web/HTTP/Caching",
 "text": "Markdow"
}]]

const objValidate =[
  {
href:"https://developer.mozilla.org/es/docs/Web/HTTP/Caching",
file:"C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder",
text:"Markdow",
status: 200,
ok: "ok",
  }
];


    describe("mdLinks,(file)",() =>{
      it("Debería funcionar",() => {
        return mdLinks(file).then(data => {
        expect(data).toEqual([objData]);
      });
    });
    });
    describe('mdLinks(file, true)', () => {
    test('mdLinks(file, true)', () => {
      return mdLinks(file,true).then(data => {
          expect(data).toEqual([objData]);
        });
      });
    });
        describe('mdLinks(pathError)', () => {
            test('mdLinks(pathError)', () => {
                return mdLinks(pathError).catch(data => {
                    expect(data).toBe(error);
                });
                 });
            });