import fs from 'fs';
import path from 'path';

// *********** VERIFICA SI EXISTE LA RUTA true or false ***********
const existsPath = (route) => fs.existsSync (route);

// *********** CONVIERTA A UNA RUTA ABSOLUTA **********************
const pathIsAbsolute = (route) => path.isAbsolute(route) ? route : path.resolve(route);

// *********** EL PATH ES UN DIRECTORIO? **************************
const pathIsAdirectory = (route) => fs.lstatSync(route).isDirectory();

// *********** EL PATH ES UN ARCHIVO? *****************************
const pathIsAfile = (route) => fs.statSync(route).isFile();

// *********** RECORRER EL DIRECTORIO RECURSIVAMENTE ***************
const travelByDirectoryAndFile = (route) => {
  let arrayResult = [];
  if(pathIsAdirectory(route)){ //si es un directorio vamos a bucar si dentro hay un archivo
    const arrayDirectory = fs.readdirSync(route); //lee sincrónicamente el contenido de un directorio
    arrayDirectory.forEach((file) => {
      const routeList = path.join(route, file); // routeList es un archivo encontrado dentro del directorio
      if(pathIsAdirectory(routeList)){ // si ya es un directorio con su archivos
        arrayResult = arrayResult.concat(travelByDirectoryAndFile(routeList))
      }
      if(path.extname(routeList === '.md')){ // routeList Get the extension from a file path
        arrayResult.push(routeList);
      }
    })
  }
  else{
    arrayResult.push(route)
  }
  return arrayResult;
}



export default { existsPath, pathIsAbsolute, pathIsAdirectory, pathIsAfile, travelByDirectoryAndFile }
