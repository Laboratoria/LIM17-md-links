import {mdLinks } from '../../src/md-links.js'
import fetch from 'node-fetch'
jest.mock('node-fetch')

const path = 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md'
const pathTwo = 'pruebaDos.md'
const pathThree = 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\prueba.md'
const pathFour = 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\src'
const pathFive = 'D:\\BOOTCAMP-GITHUB\\ReposCinthia\\LIM017-md-links\\src'
const optionsTrue = {validate:true}
const optionsFalse = {validate:false}
const arrayTrue = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md',
    status: 200,
    message: 'OK'
  }
]
const arrayTrueTwo = [
  {
    href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
    text: 'Funciones — bloques de código reutilizables - MDN',
    file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaDos.md',
    status: 404,
    message: 'FAIL'
  }
]
const arrayTrueError = [
  {
    href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
    text: 'Funciones — bloques de código reutilizables - MDN',
    file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaDos.md',
    status: 500,
    message: 'FAIL'
  }
]
const arrayFalse = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (`RegExp`)',
    file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md'
  }
]

test('should return an array validated with message ok', () => {
  return mdLinks(path, optionsTrue).then((res) => {
    expect(res).toEqual(arrayTrue);
  })
});
test('should return an array validated with message fail', () => {
  fetch.mockImplementation(() => Promise.resolve({message:"fail", status:404}));{
    return mdLinks(pathTwo, optionsTrue)
    .then((res) => {
      expect(res).toEqual(arrayTrueTwo);
    })};
});
test('should return an array validated with Error', () => {
  fetch.mockRejectedValue('error')
    return mdLinks(pathTwo, optionsTrue)
    .catch((err) => {
      expect(err).toEqual(arrayTrueError);
    });
});
test('should return an unvalidated array', () => {
  return mdLinks(path, optionsFalse).then((res) => {
    expect(res).toEqual(arrayFalse);
  })
});
test('should return a message "this file has no links"', () => {
  return mdLinks(pathThree, optionsTrue).catch((err) => {
    expect(err).toBe('Este archivo no tiene links');
  })
});
test('should return a message "path has no MD files"', () => {
  return mdLinks(pathFour, optionsTrue).catch((err) => {
    expect(err).toBe('La ruta no tiene archivos MD');
  })
});
test('should return a message "path entered does not exist"', () => {
  return mdLinks(pathFive, optionsTrue).catch((err) => {
    expect(err).toBe('La ruta ingresada no existe');
  })
});