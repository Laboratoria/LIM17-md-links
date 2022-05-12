import fs from 'fs';
import path from 'path';
const mdlinks = () => {

};

//Función para determinar si la ruta es absoluta o no
const determinateAbsolutePath = (pathRoot)=> {
  return path.isAbsolute(pathRoot);
};

console.log(determinateAbsolutePath('//server'));
