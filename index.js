

/* eslint-disable semi */
const utils = require('./utils');

console.log(process.argv);
/* ---intentando con promesa --- */

const extensionMD= utils.pathExtension('src/md-links.md');
console.log(extensionMD);
// poner el catch ver video de promise otra vez
const mdLinks = (path, options) => {
  
    let filesFounded = [];
    
 
const transformToAbs =  utils.pathTransformAbs('index.js');
if(console.log(utils.searchFiles(transformToAbs))){
const readDirectory = utils.readDirectory(transformToAbs);

};
};


// if(dir<1){
//   1ero.- throw new Error('no existen directorios' + 'buscando archivos')
//   2do.- ejecutar "buscar archivos"
//   }
//   if (dir === 1) {
//   return fs.readdir('./',(err, files) ={
//   files.forEah( file => {
//   console.log (file);
//   filesFoundes.push(file);
   
//   else{
//    (dir * factorial(dir - 1)); 
  
//   }
//   factorial(dir); //directorios
  
  
//   dir === 1 //caso base(cb), sin un cb la pc agotará sus recursos 
//   type error "to much resurces" 


