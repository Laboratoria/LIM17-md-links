#!/usr/bin/env node
const {mdLinks} = require('./mdLinks.js');

const [a, b, ...args]= process.argv;
const route = args[0];
const stats = args.includes('--stats');
const validate = args.includes('--validate');
const inputArgs = args.length;

if(inputArgs === 0 && !route){
 const mngError ='Enter the route';
 console.log(mngError)

} else if(inputArgs === 1 && !validate && !stats){ 
  // presentar: href, text, file 
   const arrObj= mdLinks(route, false);
  //  const notValidate = arrObj.forEach(el =>`Href: ${el.href}\n  Text: ${el.text}\n  File: ${el.file}`)
   console.log(arrObj)

} else if(inputArgs === 2 && validate && !stats){
 // presentar: href, text, file, status, ok
   mdLinks(route, true)
  .then(links => { 
    console.log(links)
  })
  .catch(console.error);

} else if(inputArgs === 2 && !validate && stats){
   // presentar: Total Unique
   const arrObjStats= mdLinks(route, false);
  
   console.log(arrObjStats)

} else if(inputArgs === 2 && validate && stats){
    console.log('Total Unique Broken')
 // presentar: Total Unique Broken
 mdLinks(route, true)
 .then(links => { 
   console.log(links)
 })
 .catch(console.error);
}