import {validateLinks} from '../../src/util.js'
import fetch from 'node-fetch'
jest.mock('node-fetch')

describe ('validateLinks', () => {
  it("status: 200 - message: 'OK' ", () => {
    const testForValidate =  [
      {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md'
      }
    ]
    const testValidate = [{
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md',
      status: 200,
      message: 'OK'
    }
  ]
  return validateLinks(testForValidate)
  .then((res) => {
    expect(res).toEqual(testValidate);
  });
  });
  it("status: >400 - message: 'FAIL' ", () => {
    const testForValidate =  [
      {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md'
      }
    ]
    const testValidate = [{
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md',
      status: 404,
      message: 'FAIL'
    }
  ]
  fetch.mockImplementation(()=>{
    return validateLinks(testForValidate)
    .then((res) => {
      expect(res).toBe(testValidate);
    });
    });
  });
  it("Promise rejected' ", () => {
    const testForValidate =  [
      {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md'
      }
    ]
    const testValidate = [{
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md',
      status: 500,
      message: 'FAIL'
    }
  ]
    fetch.mockRejectedValue('error')
    return validateLinks(testForValidate)
    .catch((err) => {
      expect(err).toEqual(testValidate);
    });
    });
});