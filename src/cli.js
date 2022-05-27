#!/usr/bin/env node
const {mdLinks} = require('./mdLinks.js');

const [a, b, ...args]= process.argv;
const inputRoute = args[0];
const optionStats = args.includes('--stats');
const optionValidate = args.includes('--validate');


console.log(process.argv)

if(!optionValidate && !optionStats){
    console.log('no hay opciones')
    // mdLinks(inputRoute)
    // .then(links => {
    //   // => [{ href, text, file }, ...]
    // })
    // .catch(console.error);
}

if(optionValidate && !optionStats){
  console.log('Solo --validate ')
 
//   mdLinks(inputRoute, { validate: true })
//   .then(links => {
//     // => [{ href, text, file, status, ok }, ...]
//   })
//   .catch(console.error);
}


if(optionValidate && optionStats){
    console.log(' --validate y --stats')
//     mdLinks(inputRoute, { validate: true })
//   .then(links => {
//     // stats
//   })
//   .catch(console.error);
}

if(!optionValidate && optionStats){
    console.log('solo --stats')
}
