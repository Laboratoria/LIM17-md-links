import {getArgPathAbsolute} from '../util';

const pathTest = 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\README.md';

describe ('getArgPathAbsolute', () => {
    it('shoul resolve path in windows', () => {
        console.log(getArgPathAbsolute('README.md'));
        expect(getArgPathAbsolute('README.md')).toBe(pathTest);
    });
});