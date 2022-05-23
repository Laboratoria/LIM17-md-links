import { readaPathDirectory,determinateAbsolutePath, createAbsolutePath,validatePath, ifIsFile, ifIsDirectory,getContentMdFile, findMdFile,getFilesMdofDirectory} from '../api.js'

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
    expect(getContentMdFile('exampleFile.txt')).toBe(console.log('el archivo no es .md'));
  });
});

describe('findMdFile', () => {
  it('should be return true if the file is .md', () => {
    expect(findMdFile('exampleFile.txt')).toBe(false);
  });
});

describe('getFilesMdofDirectory', () => {
  it('should be return an array with files and directories names', () => {
    expect(readaPathDirectory(route)).toEqual(['carpetadeprueba' , 'exampleone.txt' , 'exampletwo.md']);
  });
  // it('should be traverse the array and return the md files', () => {
  //   const newPathDirectory = 'C:\LABORATORIA PROYECTOS\P4-MDLINKS\LIM017-md-links\archivosdeprueba\exampleone.md'
  //   expect(findMdFile(newPathDirectory)).toBe(['example.md']);
  // });
  // it('should be return true if the file is .md', () => {
  //   expect(findMdFile('exampleFile.txt')).toBe(false);
  // });
});