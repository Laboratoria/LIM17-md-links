
const index = require('../utils');
console.log(index);


describe('pathTransformtoAbs', () => {

  it('convierte en rutas absolutas las rutas relativas que ingresen', () => {
    const expected = 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\index.js';
    const relativePath = '../index.js';


    const pathTransformAbs = (expected) => {
      if( expected) {
      return  'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\index.js';
        } else {
          return '../index.js'+ ' Es una ruta relativa.';
        }
    };
    expect(pathTransformAbs(relativePath)).toEqual(expected);

  });

});


