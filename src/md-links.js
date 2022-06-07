import fetch from 'node-fetch';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';


// const fs = require ('fs');
// const path = require('path');

export const absolutePath = (route) => path.isAbsolute(route) ? route :path.resolve(route);
export const yesRoute = (route) => fs.existsSync(route);
const yesDirectory = (route) => fs.statSync(route).yesDirectory();
const yesFile = (route) => fs.statSync(route).yesFile();
const extensionMd = (route) => path.extensionMd(route); 
const findFiles = (route) => fs.readdirSync(route);
const readFile = (route) => fs.readFileSync(route, 'utf8');
const joinTwopaths = (route) => {
  return findFiles(route).map((elements)=>path.join(route, elements));
}
const routeMd = (route) => {
  let arrayFiles = [];
  const pathAbsolute = absolutePath(route);
    if (yesFile(pathAbsolute) && extensionMd(pathAbsolute) === '.md'){
      arrayFiles.push(pathAbsolute);
    } else if (yesDirectory(pathAbsolute)){
      joinTwopaths(pathAbsolute).forEach(elements=> {
        const mdFiles =  routeMd(elements);
        arrayFiles = arrayFiles.concat(mdFiles);
      });
    } else {return false}; 
    return arrayFiles
};

//ttt


