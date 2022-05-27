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
   const arrObj= mdLinks(route, false);
   const notValidate = arrObj.forEach(el =>{ el.href, el.text, el.file});
   console.log(notValidate)

} else if(inputArgs === 2 && validate && !stats){
  console.log(' href, text, file, status, ok')
   mdLinks(route, true)
  .then(links => { console.log(links)
  })
  .catch(console.error);

} else if(inputArgs === 2 && !validate && stats){
   console.log('Total Unique')

} else if(inputArgs === 2 && validate && stats){
    console.log('Total Unique Broken')
  mdLinks(inputRoute, true )
  .then(links => {
    // stats
  })
  .catch(console.error);
}