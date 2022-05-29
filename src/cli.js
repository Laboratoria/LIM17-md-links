#!/usr/bin/env node
const {mdLinks} = require('./mdLinks.js');
const chalk = require('chalk');

const [, , ...args]= process.argv;
const route = args[0];
const stats = args.includes('--stats');
const validate = args.includes('--validate');
const inputArgs = args.length;
const blue = chalk.bold.blue;
const white = chalk.bgWhiteBright;
const magenta = chalk.bgMagenta;

if(inputArgs === 0 && !route){
 const mngError = chalk.bold.redBright('Enter the route');
 console.log(mngError)

} else if(inputArgs === 1 && !validate && !stats){ 
   mdLinks(route, false)
   .then((result) =>{
   result.forEach(el => console.log(`${magenta('href:')} ${chalk.bold.green(el.href)}\n${magenta('text:')} ${blue(el.text)}\n${magenta('file:')} ${blue(el.file)}\n`)) //href, text, file 
  });

} else if(inputArgs === 2 && validate && !stats){
   mdLinks(route, true)
  .then((result) =>{
    result.forEach(el => console.log(`${magenta('href:')} ${chalk.bold.green(el.href)}\n${magenta('text:')} ${blue(el.text)}\n${magenta('file:')} ${blue(el.file)}\n${magenta('status:')} ${blue(el.status)}\n${magenta('ok:')} ${chalk.bgYellowBright(el.ok)}\n`))
  })//href, text, file, status, ok
  .catch(console.error);

} else if(inputArgs === 2 && !validate && stats){
   mdLinks(route, false)
   .then((result) =>{
     const unique = [...new Set(result.map((element) => element.href))].length;
     const total = result.length;
     console.log(`${white(blue('Total:'))} ${blue(total)}\n${white(blue('Unique:'))} ${blue(unique)}`)// Total, Unique
  });
} else if(inputArgs === 3 && validate && stats){
  mdLinks(route, true)
  .then((result) =>{
    const unique = [...new Set(result.map((element) => element.href))].length;
    const total = result.length;
    const broken = result.filter((element) => element.ok === 'fail').length; 
    console.log(`${white(blue('Total:'))} ${blue(total)}\n${white(blue('Unique:'))} ${blue(unique)}\n${white(blue('Broken:'))} ${blue(broken)}`) // Total, Unique, Broken
  })
  .catch(console.error);
}