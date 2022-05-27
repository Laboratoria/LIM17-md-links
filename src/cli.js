#!/usr/bin/env node
const {mdLinks} = require('./mdLinks.js');

const [a, b, ...args]= process.argv;
const route = args[0];
const stats = args.includes('--stats');
const validate = args.includes('--validate');
const inputArgs = args.length;


console.log(process.argv)
if(inputArgs === 0){
 console.log('No ingresaste la ruta')
}

if(inputArgs === 1){
  console.log('href, text, file')
  // mdLinks(route)
  //   .then(links => {
  //       links
  //     // => [{ href, text, file }, ...]
  //   })
  //   .catch(console.error);
}

if(inputArgs === 2){
  console.log('Solo --validate ')
  if(validate && !stats){
 
  console.log(' href, text, file, status, ok')
//   mdLinks(inputRoute, { validate: true })
//   .then(links => {
//     // => [{ href, text, file, status, ok }, ...]
//   })
//   .catch(console.error);
  }

if(!validate && stats){
  console.log('Total Unique')
}

}


if(validate && stats){
    console.log('Total Unique Broken')
//     mdLinks(inputRoute, { validate: true })
//   .then(links => {
//     // stats
//   })
//   .catch(console.error);
}
