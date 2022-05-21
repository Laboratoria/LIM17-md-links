import fs from 'fs';
import path from 'path';


//Función para determinar si la ruta es absoluta o no
export const determinateAbsolutePath = (pathRoot)=> path.isAbsolute(pathRoot);


//Función para convertir ruta en absoluta
export const createAbsolutePath = (pathRoot)=> path.resolve(pathRoot);


//Función para comprovar si la ruta existe o no
export const validatePath = (pathRoot) => fs.existsSync(pathRoot);
 
//Funciones para saber si el path es directorio o file
//saber si es file
export const ifIsFile = (pathRoot)=> {
    const statsObj = fs.statSync(pathRoot);
    return statsObj.isFile();
}

//saber si es directorio
export const ifIsDirectory = (pathRoot)=> {
    const statsObj = fs.statSync(pathRoot);
    return statsObj.isDirectory();
}

//MOSTRAR EL CONTENIDO DE UN ARCHIVO
export const readaPathFile= (pathRoot)=> fs.readFileSync(pathRoot).toString();

// encontrar archivos con extensión de .md
export const findMdFile =(pathRoot)=> path.extname(pathRoot)=== '.md';

//leer un directorio (devuelve el contenido sin identifiacr si hay o no carpetas dentro)
export const readaPathDirectory= (pathRoot)=> fs.readdirSync(pathRoot);

//recursividad / para obtener los archivos de cada directorio y acumularnos en un array (lee las carpetas de cada directorio)
export const getFilesofDirectory = (pathRoot)=>{
let arrayFiles= [];
readaPathDirectory(pathRoot).forEach(e => {
const newPathDirectory = path.join(pathRoot, e);
if(ifIsFile(newPathDirectory)){
    arrayFiles.push(e);
}else {
    return arrayFiles = arrayFiles.concat(readaPathDirectory(newPathDirectory))
};
}
)
return arrayFiles;
}
//     return path.join(pathRoot,e)
    // const arrayFiles= [path.join(pathRoot,e)]
    // return arrayFiles;

// filesnames.forEach(file=> {
//         ;
//         return ifIsDirectory(newPathDirectory)=== true ? console.log(readaPathDirectory(newPathDirectory)): console.log(filesnames);
// }


