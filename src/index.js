const {
  existRoute,
  convertToAbsolute,
  verifyDirectory,
  openedDirectory,
  filterFile,
  gettinlinks,
  statusLinks } = require('./md-links');

  const mdLinks = (path, options = {validate: false}) => {
    return new Promise((resolve, reject) => {
      const converPath = convertToAbsolute(path);
      let arrayMd =[];
      if(existRoute(converPath)) {

        if(verifyDirectory(converExample)){
          const arrFile = openedDirectory(converExample);
          if (arrFile.lengeth > 0) {
            arrayMd = filterFile (arrFile);
         }else {
           reject(" ⛔️ El directorio está vacío, ingrese otra ruta.");
         }

         } else {
           arrayMd = filesMd ([converExample]);
         }
         if (arrayMd.length > 0) {
           const arrLink = links (arrayMd)
           if (arrLink.length > 0) {
             if (options,validate) {
               statusLinks(arrLink)
               .then(response =>resolve (response));
             }else {
               resolve(arrLink)
             }
           }else {
             reject(" ⛔️ No hay enlaces, introduce otra ruta.");
           }
         }else {
           reject(" ⛔️ No hay archivos .md, ingrese otra ruta.");
         }
        }else {
          reject(" ⛔️ La entrada de ruta no existe, ingrese otra ruta.");
        }
      })
    }

    module.exports = {mdLinks}