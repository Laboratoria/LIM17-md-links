#!/usr/bin/env node
const {mdLinks} = require('./mdLinks.js');
console.log(process.argv);
const [, , ...args]= process.argv;
const route = args[0];
const stats = args.includes('--stats');
const validate = args.includes('--validate');
const inputArgs = args.length;

if(inputArgs === 0 && !route){
 const mngError = 'Enter the route';
 console.log(mngError)

} else if(inputArgs === 1 && !validate && !stats){ 
   mdLinks(route, false)
   .then((result) =>{
   result.forEach(el => console.log(`${el.href}\n${el.text}\n${el.file}\n`)) //href, text, file 
  });

} else if(inputArgs === 2 && validate && !stats){
   mdLinks(route, true)
  .then((result) =>{
    result.forEach(el => console.log(`${el.href}\n${el.text}\n${el.file}\n${el.status}\n${el.ok}\n`))
  })//href, text, file, status, ok
  .catch(console.error);

} else if(inputArgs === 2 && !validate && stats){
   mdLinks(route, false)
   .then((result) =>{
     const unique = [...new Set(result.map((element) => element.href))].length;
     const total = result.length;
     console.log(`Total: ${total}\nUnique: ${unique}`)// Total, Unique
  });
} else if(inputArgs === 3 && validate && stats){
  mdLinks(route, true)
  .then((result) =>{
    const unique = [...new Set(result.map((element) => element.href))].length;
    const total = result.length;
    const broken = result.filter((element) => element.ok === 'fail').length; 
    console.log(`Total: ${total}\nUnique: ${unique}\nBroken: ${broken}`) // Total, Unique, Broken
  })
  .catch(console.error);
}