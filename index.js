import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import MarkdownIt from 'markdown-it';
import http from 'node:https';
import { get } from 'http';

//¿La ruta es absoluta? true - false 
export const isAbsolute = (inputPath) => path.isAbsolute(inputPath);

//Convierte una ruta de relativa a absoluta 
export const routeToAbsolute = (inputPath) => path.resolve(inputPath);

//¿La ruta existe? true - false 
export const pathExists = (inputPath) => fs.existsSync(routeToAbsolute(inputPath));

//¿Es una carpeta?
const isDirectory = (route) => fs.lstatSync(route).isDirectory();
//console.log(isDirectory('links.md'))

// Iterar una carpeta 
export const readDirectory = (route) => fs.readdirSync(route);
//console.log(readDirectory('folder-links'))

//¿Es un archivo?
const isFile = (route) => fs.lstatSync(route).isFile(route)
//console.log(isFile('links.md'))

//Conoce la extensión de un archivo Md 
export const getFileExtensionMd = (inputPath) => path.extname(inputPath) === '.md';
//console.log(getFileExtensionMd('links.md'))

const getArray = (route) => {
  let arr = [];
  let routeAbsolute = routeToAbsolute(route)
  if(isFile(routeAbsolute)==true && getFileExtensionMd(routeAbsolute)==true){
    arr.push(routeAbsolute)
  }

  else if (isDirectory(route)==true){
    const files = readDirectory(route)
    files.forEach((file) => {
      const newFile = path.join(route, file);
      const readNewFile = getArray(newFile);
      arr = readNewFile.concat(arr)
    })
  }
return arr;
  }
console.log(getArray('folder-links'))

/*


export function getFileMd(route) {
  let arrFiles = [];
  if (isFile(route) && identifyFile(route)) {
    arrFiles.push(route);
  } else if (folderPath(route)) {
    const files = readDirectory(route);
    files.forEach((file) => {
      const newRoute = path.join(route, file);
      const reading = getFileMd(newRoute);
      arrFiles = reading.concat(arrFiles);
    });
  }
  return arrFiles;
}
console.log(getFileMd('folder-links'))
/*
//export const readFile = (inputPath) => fs.readFileSync(inputPath, 'utf-8');



const rutaDirectorioEjemplo = '/Users/mac/Documents/LIM017-md-links/documentProof/'

//const directoryRoute = (ruta) => fs.statSync(ruta).isADirectory();
//console.log('La ruta es un directorio: ---> ', directoryRoute(rutaDirectorioEjemplo))


const readDirectory = (pathDirectory) => {
    let directoryContent = fs.readdirSync(pathDirectory);
     if(directoryContent.length > 0){
         directoryContent = directoryContent.map((element) => element = path.join(pathDirectory, element));
         return directoryContent;
     }
 }
 //console.log(readDirectory('folder-links'))
 



    
export const getLinks = (dataFile) => {
    const md = new MarkdownIt();
    const dataHTML = md.render(dataFile);
    const arrayTags = dataHTML.match(/<a\shref="http*.*>.*?<\/a>/g);
    if (arrayTags !== null) {
      const arrayObj = arrayTags.map((tag) => {
        const dom = new JSDOM(`<!DOCTYPE html>${tag}`);
        const link = dom.window.document.querySelector('a').href;
        const textLink = dom.window.document.querySelector('a').textContent;
  
        return { href: link, text: textLink.slice(0, 50) };
      });
      const dataBylinks = {};
      arrayObj.forEach((e, i) => {
        dataBylinks[`Link ${i + 1}`] = e;
      });
      return dataBylinks;
    }
    return 'No se encontraron links';
  };
  const file = ' * [En este proyecto crearás una herramienta de línea de comando](https://github.com/Laboratoria/LIM017-md-links)';
  console.log(getLinks(file));*/