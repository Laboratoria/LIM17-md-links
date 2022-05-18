const path = require('path') // devuelve <booleano>
const fs = require('fs')



/*   ---Convirtiendo rutas relativas a absolutas--- */
const pathTransformAbs = (routes) => path.isAbsolute(routes) ? routes : console.log(path.resolve(routes), '"convertida en ruta absoluta"'); 

const pathExtension = (routes) => path.extname (routes) === '.md' ? routes : 'El archivo no es de tipo markdown' ; // validando que sea del tipo 'md'.

/*  ---buscando archivos para leer con promesa---  */

const searchFiles = (routes) => {
    return new Promise((resolve, reject) => {
      fs.readFile(routes,(err, data)=> (!err) ? resolve(console.log(data.toString())): reject( new Error('no existe la ruta')));
      })
      .then((routes) => {
          console.log(routes, 'estamos en el then')
      })
      .catch((err)=>{
          console.log(err, 'estamos en el catch')});
  }; 

 /*   ---Para comprobar si es un directorio---  */

 // isDirectory()  método que devuelve 'true' si es un directorio, 
 //luego de llamar a stats que es un objeto
 // que proporciona info sobre un archivo  o directorio:

const isDirectory = (routes) => {
    fs.stat(routes, (err, stats) =>  (!err)  ? console.log(stats.isDirectory()): console.log(err) );
}


 //isFile() método que devuelve un booleano si es un archivo:
 
 const isFile = (routes) => {
    fs.stat(routes, (err, stats) =>  (!err)  ? console.log(stats.isFile()): console.log(err) );
}

/*    ---imprimiendo los archivos que hay dentro del directorio   ---*/

const readDirectory = (dir) => {
    fs.readdir('./', (err, dir) => { 
        if(!err) {
            dir.forEach(file => {
                console.log(file);
            });
        } else {
            console.log(err);
        }
  });
  return dir;

}
    
 console.log(pathTransformAbs('./utils.js'));

console.log(searchFiles('C:/Users/USER/Desktop/laboratoria/LIM017-md-links/utils.md'));
console.log(isFile('./utils.js'));
console.log(isDirectory('./utils.js'));






module.exports = (pathTransformAbs, pathExtension, searchFiles, readDirectory );
