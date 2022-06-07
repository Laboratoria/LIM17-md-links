import {stats, statsAndBroken, showValidatedLinks, showUnvalidLinks} from '../../src/statistics.js'
jest.mock("chalk", () => ({
  blueBright: jest.fn(() => "blueBright"),
  green: jest.fn(() => "green"),
  yellow: jest.fn(() => "yellow"),
  red: jest.fn(() => "red"),
  cyan: jest.fn(() => "cyan"),
}));

const arrayTestOne = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares ("RegExp")',
    file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md',
    status: 200,
    message: 'OK'
  }
]
const arrayTestTwo = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares ("RegExp")',
    file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md',
    status: 404,
    message: 'Fail'
  }
]
const arrayTestEmpty = []

const resultTestEmpty = "No se encontraron links en la ruta proporcionada" 
const resultTestOne = `blueBright 1 blueBright 1`
const resultTestTwo = `blueBright 1 blueBright 1 blueBright 0`
const resultTestThree = `
      yellow https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
      yellow expresiones regulares ("RegExp")
      yellow D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md
      yellow 200
      yellow green
      `
const resultTestFour = `
      yellow https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
      yellow expresiones regulares ("RegExp")
      yellow D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md
      `
const resultTestFive = `
      yellow https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
      yellow expresiones regulares ("RegExp")
      yellow D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md
      yellow 404
      yellow red
      `
describe('stats', () => {
    it('should return the Total and Unique links', () => {
      expect (stats(arrayTestOne)).toBe(resultTestOne);
    });
});

describe('statsAndBroken', () => {
    it('should return the Total, Unique and Broken links', () => {
      expect (statsAndBroken(arrayTestOne)).toBe(resultTestTwo);
    });
});

describe('showValidatedLinks', () => {
  it('should return string href, text, file, status, message(color green)', () => {
    expect (showValidatedLinks(arrayTestOne)).toBe(resultTestThree);
  });
});

describe('showValidatedLinks', () => {
  it('should return string href, text, file, status, message(color red)', () => {
    expect (showValidatedLinks(arrayTestTwo)).toBe(resultTestFive);
  });
  it('should return a message', () => {
    expect (showValidatedLinks(arrayTestEmpty)).toBe(resultTestEmpty);
  });
});

describe('showUnvalidLinks', () => {
  it('should return string href, text, file', () => {
    expect (showUnvalidLinks(arrayTestOne)).toBe(resultTestFour);
  });
  it('should return a message', () => {
    expect (showUnvalidLinks(arrayTestEmpty)).toBe(resultTestEmpty);
  });
});