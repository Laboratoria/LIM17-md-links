#!/usr/bin/env node
/* eslint-disable no-console */
const { mdLinks } = require('./index');
const chalk = require('chalk');

/* const inputArray = process.argv;
const path = inputArray[2];
const options = [inputArray[3], inputArray[4]];
console.log(options) */

// const error = ;
    /* path = process.argv[2];
    options = process.argv;
    console.log(path);
    console.log(process.argv); */

    const [, , ...args] = process.argv;
    

    if(args.length === 0 && !args[0]) {
      const help =`
      _______________________________________________________________________________________________________________________________________________________
      
          --validate         => Devuelve información del enlace : href, text, file, status, ok/fail.
          --stats            => Devuelve el número total de enlaces y enlaces únicos.
          --validate --stats => Devuelve el número total de enlaces (total), enlaces únicos (únicos) y enlaces rotos (rotos).
      _______________________________________________________________________________________________________________________________________________________
          `
        console.error(help);

      }
      else if (args.legenth===1  && !args.includes("---validate") && !args.includes('--stats')){
        mdLinks(args[0],false)
        .then(result => {
          result.forEach(res => console.log(`${('href:')} ${(res.href)}\n${('text:')} ${(res.text)}\n${('file:')} ${(res.file)}\n`)) //href, text, file 
        });

    } else if(inputArgs === 2 && args.includes('--validate') && !args.includes('--stats')) {
      mdLinks(args[0], true)
     .then((result) =>{
       result.forEach(res => console.log(`${('href:')} ${(res.href)}\n${('text:')} ${(res.text)}\n${('file:')} ${(res.file)}\n${('status:')} ${(res.status)}\n${('ok:')} ${(res.ok)}\n`))
     })//href, text, file, status, ok
     .catch(console.error);
    }
