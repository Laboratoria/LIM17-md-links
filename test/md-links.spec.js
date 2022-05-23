import { pathIsAbsolute } from '../operacionesApi.js';

const routeAbsolute = 'C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links\\prueba1.md';

describe('pathIsAbsolute', () => {
  it('Deberia retornar una ruta absoluta', () => {
    expect(pathIsAbsolute('C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links\\prueba1.md')).toStrictEqual(routeAbsolute);
  });
  it('Deberia retornar una ruta absoluta', () => {
    expect(pathIsAbsolute('./prueba1.md')).toBe(routeAbsolute);
  });
});
