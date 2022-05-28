const fs = require('fs'); // Requiriendo módulo que nos permita interactuar con directorios y archivos: file system
const path = require('path'); // Módulo que nos permite saber el tipo de extensión de un archivo 
const chalk = require('chalk'); // módul
//Leer archivo indicado
// fs.readFile('../prueba/prueba.js','utf-8', (error,data) => {
//     if(error){
//     console.log(error);
//     }else{
//     console.log(data)}
// });

// // //Averiguar extensión de un archivo
// console.log(path.extname('pruebaccxxxx.md'))

// //Obtener contenido de un directorio
// fs.readdir('../prueba', (error, files) => {
//     if(error){
//         throw error;
//     }
// console.log('Listar directorio: ' + files)
//     })

// // //Unir dos rutas
// let path1 = path.join('prueba', 'soyunloco.md');
// console.log('Uniendo la ruta: ' + path1)

// //crear archivos
// fs.writeFile('.prueba.md', 'agregando cosas', function (err) {
//     if (err) {
//         console.log(err)
//     }
//     console.log('creado')
// })

// Convertir a una ruta en absoluta
const absolutePath = (file) => (path.isAbsolute(file)) ? file : path.resolve(file);
console.log('Convirtiendo a una ruta absoluta con "absolutePath"' + absolutePath('./prueba/prueba'));

// Saber si una ruta existe
const pathExists = (path) => fs.existsSync(path) ? path : "File no exists";
console.log('¿Existe la ruta? ' + pathExists('1111.js'))