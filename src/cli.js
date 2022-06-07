#!/usr/bin/env node
const { mdLinks } = require('./index');
const chalk = require('chalk');

    const [, , ...args] = process.argv;    

    if(args.length === 0 && !args[0]) {
      const help =chalk.bold.redBright(`
      _______________________________________________________________________________________________________________________________________________________
      Ingrese una ruta y utilice uno de los comandos:
      
          --validate         => Devuelve información del enlace : href, text, file, status, ok/fail.
          --stats            => Devuelve el número total de enlaces y enlaces únicos.
          --validate --stats => Devuelve el número total de enlaces (total), enlaces únicos (únicos) y enlaces rotos (rotos).
      _______________________________________________________________________________________________________________________________________________________
          `)
        console.error(help);
    }
    
  
     else if(args.length === 2 && args.includes('--validate')) {
      mdLinks(args[0], {validate:true})
      .then((result) =>{
        result.forEach(element => console.log(`${('href:')} ${(element.href)}\n${('text:')} ${(element.text)}\n${('file:')} ${(element.file)}\n${('status:')} ${(element.status)}\n${('ok:')} ${(element.ok)}\n`))
      })//href, text, file, status, ok
      .catch(console.error);
  

     } else if(args.length === 2 &&  args.includes('--stats')){
      mdLinks(args[0], {validate:true})
      .then((result) =>{
        const unique = [...new Set(result.map((element) => element.href))].length;
        const total = result.length;
        console.log(`${('Total:')} ${(total)}\n${('Unique:')} ${(unique)}`)// Total, Unique
      });
      
    
    } else if(args.length === 3 && args.includes('--validate')  && args.includes('--stats')){
      mdLinks(args[0], {validate:true})
      .then((result) =>{
        const unique = [...new Set(result.map((element) => element.href))].length;
        const total = result.length;
        const broken = result.filter((element) => element.ok === 'fail').length; 
        console.log(`${('Total:')} ${(total)}\n${('Unique:')} ${(unique)}\n${('Broken:')} ${(broken)}`) // Total, Unique, Broken
      })
      .catch(console.error);
    }
