import {showSummary } from '../../src/cli.js'
jest.mock("chalk", () => ({
    blueBright: jest.fn(() => "blueBright"),
    green: jest.fn(() => "green"),
    yellow: jest.fn(() => "yellow"),
    red: jest.fn(() => "red"),
    cyan: jest.fn(() => "cyan"),
}));

const pathOne = 'D:/BOOTCAMP-GITHUB/Repos/LIM017-md-links/pruebaDos.md'
const pathWithoutLinks = 'D:/BOOTCAMP-GITHUB/Repos/LIM017-md-links/prueba.md'
const pathNotExist = 'D:/BOOTCAMP-GITHUB/ReposCinthia/LIM017-md-links/prueba.md'
const pathWithoutFileMd = 'src'
const resultOne = `
      yellow https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions
      yellow Funciones — bloques de código reutilizables - MDN
      yellow D:/BOOTCAMP-GITHUB/Repos/LIM017-md-links/pruebaDos.md
      yellow 404
      yellow red
      `
const resultTwo = `blueBright 1 blueBright 1`
const resultThree = `blueBright 1 blueBright 1 blueBright 1`
const resultFour = `
      yellow https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions
      yellow Funciones — bloques de código reutilizables - MDN
      yellow D:/BOOTCAMP-GITHUB/Repos/LIM017-md-links/pruebaDos.md
      `
const resultFive = `green Muestra el link, el texto, la ruta, el status y el mensaje.
green Muestra el total de links y los links únicos.
green Muestra los links totales, únicos y rotos.
cyan`
const resultSix = 'redEste archivo no tiene links'
const resultSeven = 'redLa ruta ingresada no existe'
const resultEight = 'redLa ruta no tiene archivos MD'

describe('showSummary', () => {
    it("should return the five properties(Link, Name, Path, Status and Message) with FAIL", () => {
      return showSummary(pathOne, '--validate').catch((err)=>{
        expect(err).toBe(resultOne)
      });
    });
  });

describe('showSummary', () => {
    it("should return Total and Unique Links", () => {
      return showSummary(pathOne, '--stats').then((res)=>{
        expect(res).toBe(resultTwo)
      });
    });
});

describe('showSummary', () => {
  it("should return Total, Unique and Broken Links", () => {
    return showSummary(pathOne, '--stats --validate').catch((err)=>{
      expect(err).toBe(resultThree)
    });
  });
});

describe('showSummary', () => {
  it("should return the three properties(Link, Name, Path)", () => {
    return showSummary(pathOne, '').then((res)=>{
      expect(res).toBe(resultFour)
    });
  });
});

describe('showSummary', () => {
  it("should return a message with help", () => {
    return showSummary(pathOne, 'undefined').then((res)=>{
      expect(res).toBe(resultFive)
    });
  });
});

describe('showSummary', () => {
  it("should return a message with help", () => {
    return showSummary(undefined, 'mdLinks').then((res)=>{
      expect(res).toBe(resultFive)
    });
  });
});

describe('showSummary', () => {
  it("should return a message when the path has not links", () => {
    return showSummary(pathWithoutLinks, '--validate').catch((err)=>{
      expect(err).toBe(resultSix)
    });
  });
});

describe('showSummary', () => {
  it("should return a message when the path doesn't exist", () => {
    return showSummary(pathNotExist, '--validate').catch((err)=>{
      expect(err).toBe(resultSeven)
    });
  });
});

describe('showSummary', () => {
  it("should return a message when the path has not files '.md'", () => {
    return showSummary(pathWithoutFileMd, '--validate').catch((err)=>{
      expect(err).toBe(resultEight)
    });
  });
});
