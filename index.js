
/* eslint-disable semi */
const { validatingLinks, pathTransformAbs, existenceOfaRoute, linksIntoMdFiles } = require('./utils');
const chalk = require('chalk');

// /* ---intentando con promesa --- */


const mdLinks = (path, options ) => {
    return new Promise((resolve, reject) => {
        const absolutePath = pathTransformAbs(path); //covertir a absoluta

         if (existenceOfaRoute(absolutePath)) {
                const takeLinks = linksIntoMdFiles(absolutePath); // si existe la ruta, entonces, extraer links

                if (takeLinks.length === 0) {
                    reject(console.log(chalk.bgRedBright.italic(' Error: No se encontraron links en este archivo '))) // si no hay links mostrar msj
                }

                if (options.validate) {
                    validatingLinks(takeLinks)
                    .then(res =>  resolve (res))
                    .catch(error => error)

                     //validar el estado de los links extraídos
        
                } else {
                    resolve(takeLinks);
                }

            } else {
                reject(console.log(chalk.bgRedBright.italic(' Error: no existe la ruta ingresada ')))
            }
        
    })
  
};

module.exports = {
    mdLinks
}
