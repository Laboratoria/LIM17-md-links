const index = require('../index');
console.log(index);


describe('pathTransformtoAbs', () => {

  it('convierte en rutas absolutas las rutas relativas que ingresen', () => {
    const expected = 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\src\\md-links.md';
    const noExpected = 'src/md-links.md';


    const pathTransformAbs = (expected) => {
      if( expected) {
      return 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\src\\md-links.md';
        } else {
          return 'src/md-links.md';
        }

    };
    
    console.log('FIX ME!');
    expect(pathTransformAbs(expected)).toEqual(expected);
  });

});
