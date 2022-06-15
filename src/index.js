import {
  pathExist,
  viewConvertPathtoAbsolute,
  directoryOrFile,
  isMd,
  readDirectoryContent,
  readFileMd,
  mdFiles,
  linksInMd,
  getLinksStatus
} from './md-links.js';
import chalk from 'chalk';
import fetch from 'node-fetch';



const mdBig = (path,option) => {
  return new Promise((resolve,reject) => {
    if(pathExist(path) === 'La ruta existe.') {
      let arrayNew = [];
      //console.log(chalk.white('la ruta existe'));
      const absolute = viewConvertPathtoAbsolute(path);
      if(directoryOrFile(absolute) === 'es un archivo'){
        if(isMd(absolute)){
          arrayNew.push(absolute);
        }
      }
      if(directoryOrFile(absolutePath) === 'es un directorio'){
        const search = mdFiles(absolutePath);
        fileArray.push(search);
      }
      const links = mdFiles(fileArray.flat());
      if(links.length === 0){
        reject('No es un archivo Markdow o no se encontraron links');
      }
      if(option && option.validate === true) {
        resolve(getLinksStatus(linksInMd));
      }
      else{
        resolve(mdFiles);
      }

    }
    else {
      reject(`'ingrese una ruta valida'`);
    }       
  });
};
mdBig("C:\\Users/Anggie/Desktop/Proyecto_4_MDLinks/LIM017-md-links/pruebas").then((res) =>{
console.log(res);
}).catch(err =>{
  console.log(err);
});

export default mdBig;



