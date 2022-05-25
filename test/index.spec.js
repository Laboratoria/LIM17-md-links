const { absolutePath, existsRoute } = require('../src/index.js');

const routeRelative = '../README.md';
const routeAbsolute = 'C:\\Users\\USER\\Desktop\\README.md';
const routeExits = 'C:/Users/USER/Desktop/README.md';

describe('absolutePath', () => {
    it('absolutePath', () => {
        expect(absolutePath(routeRelative)).toEqual(routeAbsolute);
    });
});


test('testing', () => {
	expect(existsRoute(routeRelative)).toBe("NA")
});

