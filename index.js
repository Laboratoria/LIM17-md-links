
/* eslint-disable semi */
const utils = require('./utils');
const chalk = require('chalk');

// /* ---intentando con promesa --- */


const mdLinks = (path, options) => new Promise ((resolve, reject) => {
 const absolutePath = utils.pathTransformAbs(path);
 if(utils.existenceOfaRoute(absolutePath)){
     const linksIntoMdFiles = utils.linksIntoMdFiles(path);
     if(linksIntoMdFiles === 0) {
         reject(console.log('error: no hay links')) 
     } else {
         if (options.validate === true) {
            resolve( utils.validatingLinks(linksIntoMdFiles))
         } else{
            resolve(linksIntoMdFiles)
         }
     }
 } else {
     reject (console.log(chalk.bold.red('error: no existe la ruta')))
 }
})
.then( (response) => {
    response.map( (promise) => promise.value ? promise.value : promise)
});

module.exports = {
    mdLinks
}
