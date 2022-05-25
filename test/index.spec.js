const existsRoute = require('../src/index.js');

const routeRelative = '../README.md';
const routeAbsolute ='C:/Users/USER/Desktop/LIM17-md-links/README.md';

// describe('absolutePath', () => {
// 	it('absolutePath', () => {
// 		expect(absolutePath(routeRelative)).toEqual(routeAbsolute);
// 	});
// });

test('testing', () => {
	expect(existsRoute("abc")).toBe('xyz')
});

