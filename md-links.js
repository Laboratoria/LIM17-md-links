/* eslint-disable no-sequences */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-escape */
/* eslint-disable linebreak-style */
import fs from 'fs';
// import path, { resolve } from 'path';
import path from 'path';
import MarkdownIt from 'markdown-it';
import fetch from 'node-fetch';
// const pathUser = process.argv[2];

// Verificamos si la ruta es valida
export const validatePath = (route) => fs.existsSync(route);

// Transformo a absoluta
export const transformToAbsolutePath = (route) => path.isAbsolute(route);
// export const transformToAbsolutePath = (route) => {
//   if (validatePath && !path.isAbsolute(route)) {
//     const isConverted = path.resolve(route).normalize();
//     return isConverted;
//   }
//   return route;
// };
// // console.log(transformToAbsolutePath('./documents'));
// export const convertingToAbs = (route) => path.resolve(route);

// export function transformToAbsolutePath(route) {
//   const routeAbsolute = convertingToAbs(route);
//   const exist = validatePath(routeAbsolute) ? routeAbsolute : false;
//   return exist;
// }

// Valida si la ruta es una carpeta
export const folderPath = (route) => fs.lstatSync(route).isDirectory();

// Iterar directorio
export const readDirectory = (route) => fs.readdirSync(route);

// Is file
export const isfile = (route) => fs.lstatSync(route).isFile();

// lee archivos con READFILE asincrónico
// const getreadFile = (route) => fs.readFileSync(route, 'utf8');

// Función para identificar si es un archivo con extención md
export const identifyFile = (route) => path.extname(route) === '.md';

// lectura de la ruta
export function getFileMd(route) {
  let arrFiles = [];
  if (isfile(route) && identifyFile(route)) {
    arrFiles.push(route);
  } else if (folderPath(route)) {
    const files = readDirectory(route);
    files.forEach((file) => {
      const newRoute = path.join(route, file);
      const reading = getFileMd(newRoute);
      arrFiles = reading.concat(arrFiles);
    });
  }
  return arrFiles;
}
// console.log(getFileMd('./documents/file3.md'));

// Convierte archivo md en html
export const renderMdtoHTML = (pathUser) => {
  const md = new MarkdownIt();
  const render = md.render(pathUser);
  return render;
};
// console.log(renderMdtoHTML('./documents/file3.md'));

// leer archivos y obtener href, text , file
export const readFile = (pathReceived) => {
  const links = [];
  if (identifyFile(pathReceived)) {
    const file = fs.readFileSync(pathReceived, 'utf8');
    const parsedFile = renderMdtoHTML(file);
    const regExp = /(<a [^>]*(href="([^>^\"]*)")[^>]*>)([^<]+)(<\/a>)/gi;
    let result;
    if (!transformToAbsolutePath(pathReceived)) {
      pathReceived = transformToAbsolutePath(pathReceived).replace(/\\/g, '/');
    } else {
      pathReceived = pathReceived.replace(/\\/g, '/');
    }
    while ((result = regExp.exec(parsedFile)) !== null) {
      const obj = {
        href: result[0, 3],
        text: result[0, 4],
        file: pathReceived,
      };
      links.push(obj);
    }
  }
  return links;
};
// console.log(readFile('./documents/file3.md'));

// Extraer la información de cada link que se encuentra en el md
// export const getObject = (readFile) => {
//   let arrayPromises = [];
//   arrayPromises = readFile.map((obj) => fetch(obj.href)
//     .then((resolve) => ({
//       ...obj,
//       status: resolve.status,
//       message: resolve.statusText,
//     }))
//     .catch((error) => ({
//       ...obj,
//       status: `Error Found in: ${obj.file}`,
//       message: 'Not Found',
//     })));
//   return Promise.all(arrayPromises);
// };
export function getObject(dataLinks) {
  const arrOfPromises = dataLinks.map((obj) => fetch(obj.href)
    .then((res) => {
      if (res.status >= 400) {
        obj.status = res.status;
        obj.message = 'fail';
        obj.icon = '✖';
      } else if (res.status >= 200 && res.status < 400) {
        obj.status = res.status;
        obj.message = 'ok';
        obj.icon = '✔';
      }
      return obj;
    })
    .catch(() => {
      obj.icon = '✖';
      obj.status = 'Status no found';
      obj.message = 'fatal error⚠️ ';
      return obj;
    }));
  return Promise.all(arrOfPromises);
}
// getObject(readFile('./documents/file3.md'))
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error));

// Funciòn para el links total y unique
export const totalUniqueLinks = (arraylinks) => {
  const totalLinks = arraylinks.length;
  const uniqueLinks = new Set(arraylinks.map((element) => element.href));
  const stats = `${('Total:')} ${(totalLinks)}\r\n${('Unique:')} ${(uniqueLinks.size)}\r\n`;
  return stats;
};
// console.log(totalUniqueLinks(['./documents/file3.md']));

// Funcion para verificar si esta roto el link
export const brokenLink = (arraylinks) => {
  const broken = arraylinks.filter((element) => element.message === 'Fail');
  const stats = `${('Broken:')} ${(broken.length)}\r\n`;
  return stats;
};
// console.log(brokenLink(['./documents/file2.md']));