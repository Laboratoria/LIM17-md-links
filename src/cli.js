#!/usr/bin/env node
const {
    inputRoute,
    absolutePath,
    existsRoute,
    isFolder,
    mdExt,
    isFile 
}= require('./index.js')

// Receive argument via command line
// const word = process.argv[2];
 
// Counting length
// const length = word.length;
 
// Printing it to console
// console.log(`Words Length : ${length}`);

console.log('que imprime');

// console.log(process.argv);

const param = (p) => {
    let index= process.argv.indexOf(p); 
    return process.argv[index - 1]; 
}

let ruta1= param('--ruta');
console.log(ruta1);
console.log(process.argv);
