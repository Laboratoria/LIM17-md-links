import fs from 'fs';
import path from 'path';
const mdlinks = () => {

};

//Función para determinar si la ruta es absoluta o no
const determinateAbsolutePath = (pathRoot)=> path.isAbsolute(pathRoot);
console.log(determinateAbsolutePath('dir1/arc1. fil'));

//Función para convertir ruta en absoluta
const createAbsolutePath = (pathRoot)=> path.resolve(pathRoot);
console.log(createAbsolutePath('dir1/arc1.fil'));



