import fs from 'fs';
import path from 'path';


//Función para determinar si la ruta es absoluta o no
export const determinateAbsolutePath = (pathRoot)=> path.isAbsolute(pathRoot);


//Función para convertir ruta en absoluta
export const createAbsolutePath = (pathRoot)=> path.resolve(pathRoot);


//Función para comprovar si la ruta existe o no
export const validatePath = (pathRoot) => fs.existsSync(pathRoot);
 
//Funciones para saber si el path es directorio o file

export const ifIsFile = (pathRoot)=> {
    const statsObj = fs.statSync(pathRoot);
    return statsObj.isFile();
}

export const ifIsDirectory = (pathRoot)=> {
    const statsObj = fs.statSync(pathRoot);
    return statsObj.isDirectory();
}

export const readaPathFile= (pathRoot)=> console.log(fs.readFileSync(pathRoot));

export const readaPathDirectory= (pathRoot)=> {
    pathRoot.forEach(() => {
        fs.readdir(pathRoot, function (err, archivos) {
            if (err) {
            onError(err);
            return;
            }
            console.log(archivos);
            });;
    })
}
