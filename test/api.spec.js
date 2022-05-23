import { determinateAbsolutePath, createAbsolutePath,validatePath, ifIsFile, ifIsDirectory,getContentMdFile} from '../api.js'

const route = './archivosdeprueba';
const absoluteRoute= 'C:\\LABORATORIA PROYECTOS\\P4-MDLINKS\\LIM017-md-links\\archivosdeprueba';
describe('validatePath', () => {
  it('should be return true if the path exists', () => {
    expect(validatePath(route)).toBe(true);
  });
});

describe('determinateAbsolutePath', () => {
  it('should be return false for absolute path', () => {
    expect(determinateAbsolutePath(route)).toBe(false);
  });
});

describe('createAbsolutePath', () => {
  it('should be return a absolute path', () => {
    expect(createAbsolutePath(route)).toBe(absoluteRoute);
  });
});

describe('ifIsFile', () => {
  it('should be return false if path is not a file', () => {
    expect(ifIsFile(route)).toBe(false);
  });
  it('should be return true if path is a file', () => {
    expect(ifIsFile('exampleFile.txt')).toBe(true);
  });
});

describe('ifIsDirectory', () => {
  it('should be return false if path is not a directory', () => {
    expect(ifIsDirectory('exampleFile.txt')).toBe(false);
  });
  it('should be return true if path is a directory', () => {
    expect(ifIsDirectory(route)).toBe(true);
  });
});

describe('getContentMdFile', () => {
  it('should be return el archivo no es .md if it isnt .md', () => {
    expect(getContentMdFile('exampleFile.txt')).toBe(true);
  });
});

