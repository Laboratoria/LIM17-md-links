const fs = require('fs'); // Requiriendo módulo que nos permita interactuar con directorios y archivos: file system
const path = require('path'); // Módulo que nos permite saber el tipo de extensión de un archivo 

//Leer archivo indicado
fs.readFile('../prueba/prueba.js','utf-8', function (error,data) {
    if(error){
    console.log(error);
    }else{
    console.log(data)}
});

//Averiguar extensión de un archivo
console.log(path.extname('prueba1.md'))

//Obtener contenido de un directorio
fs.readdir('../prueba', (error, files) => {
    if(error){
        throw error;
    }
console.log('Listar directorio: ' + files)
    })

//Unir dos rutas
let path1 = path.join('prueba', 'archivos', 'soyunloco.md');
console.log('Uniendo la ruta: ' + path1)

//crear archivos
// fs.writeFile('.prueba.md', 'agregando cosas', function (err) {
//     if (err) {
//         console.log(err)
//     }
//     console.log('creado')
// })