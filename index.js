import  opeApi from './operacionesApi.js';

const api_MDlinks = (path) => {
  return new Promise((resolve, reject) => {
    const existsPath = opeApi.existsPath(path);
    if (existsPath === false) {
      reject("The path is invalid :( ");
    }
    else{
      resolve("The path is valid :) ");
      const alsolutePath = opeApi.pathIsAbsolute(path);
      console.log(alsolutePath);
    }
  });
}
console.log(api_MDlinks('C:\\Users\\QA0005\\Desktop\\LAB\\LIM017-md-links\\prueba1.md'));

// console.log(api_MDlinks('prueba1.md'));
export default { api_MDlinks }
