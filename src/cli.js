#!/usr/bin/env node
import chalk from 'chalk'
import {mdLinks} from '../src/md-links.js'
import {showValidatedLinks, showUnvalidLinks, stats, statsAndBroken} from '../src/statistics.js'

const [,, ...args] = process.argv;
const pathToEvaluate = args[0];
const inputPos = [];
for (let i = 1; i < args.length; i ++) {
  inputPos.push(args[i]);
}

const newInputPos = inputPos.join(' ');

const help = `${chalk.green("--validate")} Muestra el link, el texto, la ruta, el status y el mensaje.
${chalk.green("--stats")} Muestra el total de links y los links únicos.
${chalk.green("--stats --validate")} Muestra los links totales, únicos y rotos.
${chalk.cyan(`Utilice esta estructura: md-links <ruta> <comando> para ejecutar el cli, también puedes escribir md-links <ruta> y obtendrás el enlace, su texto y su archivo.`)}`;      


export const showSummary = (path, options) => {
    if (options.length > 0) {
      //caso 1: cuando mi opcion es validate
      if (options === '--validate') {
        return mdLinks(path, { validate: true })
          .then((links) => showValidatedLinks(links))
      }
     // caso 2: cuando mi opcion es stats
      if (options === '--stats') {
        return mdLinks(path, { validate: true })
          .then((links) => stats(links))
          // .catch((err)=> console.log('No hay '))
      }
  // caso 3: cuando uso validate y stats
      if (options === '--stats --validate' || options === '--validate --stats') {
        return mdLinks(path, { validate: true })
          .then((links) => statsAndBroken(links))
          // .catch((err)=> console.log('No hay links '))
      }
      return Promise.resolve(help);
      // }else{
      // //   return console.log(help)
      // return Promise.resolve(help);
      }
      return mdLinks(path, { validate: false })
        .then((links) => showUnvalidLinks(links))
        // .catch((err)=> console.log('No hay links en esta ruta'))
    
    };
    
    // console.log(optionsCLI('prueba\\carpetaPrueba\\file7.md','--validate'))
    if (pathToEvaluate === undefined) {
     console.log(help);
    } else {
        showSummary(pathToEvaluate, newInputPos)
        .then((response) => console.log(response))
        .catch(() => console.log(chalk.red.inverse('ERROR'), '-- No se encontró esta ruta --'));
    }
      

























// const arg = process.argv;
// const posOne = arg[1];
// const posTwo= arg[2];
// const posThree = arg[3];

// export const  validateHttp = ((route)=>{
//     if(arg.length === 1 ){
//         console.log(help)
//     } else if(posOne){
//        return mdLinks(route, { validate: false })
//     }
// })

// console.log(validateHttp('D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaDos.md'))