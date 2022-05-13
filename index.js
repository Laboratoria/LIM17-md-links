
const { rejects } = require('assert');
const { isAbsolute, resolve } = require('path');
/* eslint-disable semi */
const fs = require('fs')
const path = require('path') // devuelve <booleano>

// path.isAbsolute(); // método determina si path es una ruta absoluta.
// path.resolve(); // método convierte una secuencia de rutas en una ruta absoluta.
// fs.readFile(path[, options], callback) // lee de forma asíncrona el contenido de un archivo

/* ---Transformar las  rutas relativas ingresadas en rutas absolutas--- */
//ingresamos una ruta
const pathTransformAbs = (routes) => path.isAbsolute(routes) ? routes : console.log(path.resolve(routes), '"convertida en ruta absoluta"'); // transformación a ruta absoluta
const pathExtension = (routes) => path.extname (routes) === '.md' ? routes : 'El archivo no es de tipo markdown' ; // validando que sea del tipo md


// console.log(pathTransformAbs('src/md-links.md'));
// console.log(pathExtension('src/md-links.js'));

console.log(process.argv);
/* ---intentando con promesa --- */

const searchFiles = (routes) => {
  return new Promise((resolve, reject) => {
    fs.readFile(routes,(err, data)=> {
      if (!err){
        resolve(console.log(data.toString()));
      }else {
         reject( new Error('no existe la ruta'));
      }
    });
  }) 
}; 
console.log(searchFiles('C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\index.md'));

module.exports = (pathTransformAbs);