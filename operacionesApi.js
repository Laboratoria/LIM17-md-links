import fs from 'fs';
import path from 'path';

// *********** VERIFICA SI EXISTE LA RUTA true or false ***********
const existsPath = (route) => fs.existsSync (route);

// *********** CONVIERTA A UNA RUTA ABSOLUTA ***********
const pathIsAbsolute = (route) => path.isAbsolute(route) ? route : path.resolve(route);

// *********** EL PATH ES UN DIRECTORIO? ***********
const pathIsAdirectory = (route) => fs.lstatSync(route).isDirectory();

// *********** EL PATH ES UN ARCHIVO? ***********
const pathIsFile = (route) => fs.statSync(route).isFile();

export default { existsPath, pathIsAbsolute, pathIsAdirectory, pathIsFile }
