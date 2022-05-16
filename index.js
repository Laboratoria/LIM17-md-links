import fs from 'fs';
import path from 'path';
const mdlinks = () => {};

const ruta = 'archivosdeprueba';
//Función para determinar si la ruta es absoluta o no
const determinateAbsolutePath = (pathRoot)=> path.isAbsolute(pathRoot);
console.log(determinateAbsolutePath(ruta));

//Función para convertir ruta en absoluta
const createAbsolutePath = (pathRoot)=> path.resolve(pathRoot);
console.log(createAbsolutePath(ruta));

//Función para comprovar si la ruta existe o no
const validatePath = (pathRoot) => fs.existsSync(pathRoot);
console.log(validatePath(ruta));



