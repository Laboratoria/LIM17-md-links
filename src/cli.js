import process from 'node:process';

const [,, ...args] = process.argv;
//console.log(args[0]);
// process argv atrapa el valor dado en la terminal

import mdBig from './index.js';

const pathNoExist = `\nNo ingreso ninguna ruta, para ver la lista de comandos disponibles ingrese: ${'md-links --help'}`;
const help = `\n${chalk.cyanBright.bold('md-links <path-to-file>')}: analiza el archivo Markdown e imprime los links encontrados, 
junto con la ruta del archivo y el texto que hay dentro del link. 
Puede añadir las siguientes opciones:
\n${chalk.cyanBright.bold('--validate')}: se hace una petición HTTP para averiguar si el link funciona o no y retorna la información.
\n${chalk.cyanBright.bold('--stats')}:  retorna un texto con el número total(Total) de links encontrados y el número de links únicos(Unique).
\n${chalk.cyanBright.bold('--stats --validate')}: retorna un texto con el número total(Total) de links encontrados,
 el número de links únicos(Unique) y el número de links rotos(Broken).`;




if(args.length === 0) {
    console.log(`isnt ${pathNoExist}`);
  };
  if(args.length === 1 && args[0] === '--help') {
    console.log(help);
  };
  if(args.length === 1 && args[0] !== '--help') {
    mdLinks(args[0])
      .then((result) => {
        result.forEach((e) => {
          console.log(`\nhref: ${chalk.cyanBright.bold(e.href)} \ntext: ${chalk.cyanBright.bold(e.text)} \nfile: ${chalk.cyanBright.bold(e.file)}`); 
        });  
      }) 
      .catch((error) => {
        console.log(error);
      });
  };
  if(args.length === 2 && args[1] === '--validate' ) {
    mdBig(args[0],{ validate: true })
      .then((result) => {
        result.forEach((e) => {
          if(e.ok=== 'Ok'){
            console.log(`\nhref: ${chalk.cyanBright.bold(e.href)} \ntext: ${chalk.cyanBright.bold(e.text)} \nfile: ${chalk.cyanBright.bold(e.file)} \nstatus: ${chalk.yellowBright.bold(e.status)} \nok: ${chalk.yellowBright.bold(e.ok)}`); 
          } else{
            console.log(`\nhref: ${chalk.cyanBright.bold(e.href)} \ntext: ${chalk.cyanBright.bold(e.text)} \nfile: ${chalk.cyanBright.bold(e.file)} \nstatus: ${chalk.redBright.bold(e.status)} \nok: ${chalk.redBright.bold(e.ok)}`); 
          }
        }); 
      }) 
      .catch((error) => {
        console.log(error);
      });
  };
  if(args.length === 2 && args[1] === '--stats' ) {
    mdBig(args[0],{ validate: true })
      .then((result) => {
        const jsonObject = result.map(JSON.stringify);
        const uniqueSet = new Set(jsonObject);
        const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  
        const stats = `\nTotal: ${chalk.green.bold(result.length)} \nUnique: ${chalk.green.bold(uniqueArray.length)}`;
        console.log(stats);
      }) 
      .catch((error) => {
        console.log(error);
      });
  };
  if(args.length === 3 && args[1] === '--stats'&& args[2] === '--validate' ) {
    mdBig(args[0],{ validate: true })
      .then((result) => {
        let linkBroken = 0;
        result.forEach((e) => {
          if(e.ok === 'Fail'){
            linkBroken += 1;
          }
        }); 
        const jsonObject = result.map(JSON.stringify);
        const uniqueSet = new Set(jsonObject);
        const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  
        const statsAndValidate = `\nTotal: ${chalk.green.bold(result.length)} \nUnique: ${chalk.green.bold(uniqueArray.length)} \nBroken: ${chalk.redBright.bold(linkBroken)}`;
        console.log(statsAndValidate);     
      }) 
      .catch((error) => {
        console.log(error);
      });
  }: