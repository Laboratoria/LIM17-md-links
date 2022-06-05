
const chalk = require('chalk');
const {
  existRoute,
  convertToAbsolute,
  verifyDirectory,
  openedDirectory,
  filterFile,
  gettinlinks,
  statusLinks } = require('./md-links');

   const mdLinks = (path, options = {validate:false}) => {
    return new Promise((resolve, reject) => {
      const converPath = convertToAbsolute(path);
      let arrayMd =[];
      if(existRoute(converPath)) {

        if(verifyDirectory(converPath)){
          const arrFile = openedDirectory(converPath);
          if (arrFile.length > 0) {
            arrayMd = filterFile (arrFile);
         }else {
           reject(chalk.bold.redBright(" ⛔️ El directorio está vacío, ingrese otra ruta."));
         }

         } else {
           arrayMd = filterFile ([converPath]);
         }
         if (arrayMd.length > 0) {
           const arrLinks = gettinlinks (arrayMd)
           if (arrLinks.length > 0) {
             if (options,validate) {
               statusLinks(arrLinks)
               .then(response =>resolve (response));
             }else {
               resolve(arrLinks)
             }
           }else {
             reject(chalk.bold.redBright(" ⛔️ No hay enlaces, introduce otra ruta."));
           }
         }else {
           reject(chalk.bold.redBright("⛔️ No hay archivos .md, ingrese otra ruta."));
         }
        }else {
          reject(" ⛔️ La entrada de ruta no existe, ingrese otra ruta.");
        }
      })
    } 

    module.exports = {mdLinks}
