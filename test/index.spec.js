const{mdLinks }=require('../src/index')


const error=" ⛔️ La entrada de ruta no existe, ingrese otra ruta.";
const pathError = "C:\\Users\\Joss\\Documents\\GitHub\\exampleFile";
const file = "C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile";
const objData = {
      href:"https://developer.mozilla.org/es/docs/Web/HTTP/Caching",
      file:"C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder",
      text:"Markdow",
}
const validate =[
  {
href:"https://developer.mozilla.org/es/docs/Web/HTTP/Caching",
file:"C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder",
text:"Markdow",
  }
];

const objValidate =[
  {
href:"https://developer.mozilla.org/es/docs/Web/HTTP/Caching",
file:"C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\anotherFolder",
text:"Markdow",
status: 200,
ok: "ok",
  }
];

/*describe("mdLinks(file)", () => {
    test("rayos", () => {
        return mdLinks(objValidate).then(data => {
             expect(validate).toEqual([objData]);
        });
        });
    });*/

    describe('mdLinks(file, true)', () => {
    test('mdLinks(file, true)', () => {
        return mdLinks(file, true).then(data => {
          expect(data).toEqual([objValidate]);
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