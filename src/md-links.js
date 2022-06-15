import fetch from 'node-fetch';
import chalk from 'chalk';
import fs, { existsSync, readdirSync } from 'fs';
import path from 'path';




//vierifica si el path existe
export const pathExist = (pathAbsolute) => existsSync(pathAbsolute) ? 'La ruta existe.' : 'La ruta no existe.';


//verifica si el path es relativo o absoluto y convierte en absoluta
export const viewConvertPathtoAbsolute = (pathToView) => path.isAbsolute (pathToView) ? pathToView : path.resolve(pathToView);


//verifica si es un archivo o un directorio
export const directoryOrFile = (path) => {
  const isOr = lstatSync(path);
  if (isOr.isDirectory()){
    return 'es un directorio';
  }
  else if(isOr.isFile()){
    return 'es un archivo';
  }
};


// visualizar si es un archivo extension .md
export const isMd = (filePath) => path.extname(filePath) === '.md' ? true : false;

// para ver el contenido de un directorio
export const readDirectoryContent = (patDir) => readdirSync (patDir, 'utf8');


//para leer el contenido de un archivo .md
export const readFileMd = (mdPath) => readFileMd(mdPath, 'utf8'); //retorna string


// extrae los archivo .md devuelve array de objetos
const arrayMdFiles = [];

export const mdFiles = (route) => {
  if(fs.statSync(route).isFile() && path.extname(route) === '.md'){
    arrayMdFiles.push(route);
}
if(fs.statSync(route).isDirectory()){
  let file = fs.readdirSync(route);
  file.forEach((file) => {
    fs.statSync(path.join(route, file)).isFile() && path.extname(path.join(route, file)) === '.md' ?
        arrayMdFiles.push(path.join(route, file)) :
        mdFiles(path.join(route, file));
  })
}
return arrayMdFiles;
};
//console.log(mdFiles("C:\\Users\\Anggie\\Desktop\\Proyecto_4_MDLinks\\LIM017-md-links\\pruebas"));
console.log(mdFiles("C:\\Users/Anggie/Desktop/Proyecto_4_MDLinks/LIM017-md-links/pruebas"));


// extrae los links encontrados en cada archivo .md 
const fullRegExp = /\[([^)@]+)?\]\(https?:([^()]*)\)/gi;
const textRegExp = /\[([^)@]+)?\]/gi;
const linkRegExp = /\(https?:([^()]*)\)/gi;

export const linksInMd = (arrayFiles) => {
  let arrayCero = [];
  arrayFiles.forEach((md) => {
    const readFile = readFileMd(md);
    const result = readFile.match(fullRegExp);
    if(result !== null){
      for(let link of result){
        const objForEachLink = {
          href: link.match(linkRegExp).toString().slice(1,-1),
          text: link.match(textRegExp).toString().slice(1,-1).slice(0,50),
          file: md
        };
        arrayCero.push(objForEachLink);
      }    
    }
  });
  return arrayCero; //un array con objetos de todos los links
};


//obtener el stado de los links
export const getLinksStatus = (arrLinks) => {
const statusOfLinks = arrLinks.map((element) => 
 fetch(element)
 .then((res)=>{
      element.status = res.status,
      element.message= (res.status >= 200) && (res.status <= 399) ? 'ok' :'fail';
      return element;
    })
 .catch((error) => {
        return {
        href: element.href,
        text: element.text,
        file: element.file,
        status: 'Not found'+ error,
        message: 'fail'
   }      
  })
)
return Promise.all(statusOfLinks);
}




























