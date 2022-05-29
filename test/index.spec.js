const { absolutePath, existsRoute, isFolder } = require('../src/index.js');

const routeRelative = '../README.md';
const routeAbsolute = 'C:\\Users\\USER\\Desktop\\README.md';
const routeExits = 'C:/Users/USER/Desktop/README.md';

describe('absolutePath', () => {
    it('absolutePath', () => {
        expect(absolutePath(routeRelative)).toEqual(routeAbsolute);
    });
});

describe('existsRoute ', () => {
test('existsRoute', () => {
	expect(existsRoute(routeExits)).toBe(false)
});
});

// describe('isFolder', () => {
//     test('isFolder', () => {
//         expect(isFolder(routeAbsolute)).toBe(true)
//     });
//     });