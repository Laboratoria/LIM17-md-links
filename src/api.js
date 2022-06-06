const fs = require("fs");
const path = require("path");
const marked = require('marked');

//funcion que convierte la ruta en absoluta
const absoluteroute = (route) =>path.isAbsolute(route) ? route : path.resolve(route);

//funcion que verifica si la ruta existe 
const routeExist = (route) => fs.existsSync(route); 

//funcion que verifica si es un directorio
const isDirectory= (route) => fs.statSync(route).isDirectory();

////verificar si la ruta es un archivo
const verifyIsFile = (route) => fs.statSync(route).isFile();
//verifica que archivos tienen la extensión .md
const markdExt = (route) => path.extname(route);
//encuentra los archivos 
const readDirectory= (route) => fs.readdirSync(route);
//leer el archivo
const readingFile = (route) => fs.readFileSync(route, 'utf8');
//unir dos rutas 
const doublePath= (route) => {
return readDirectory(route).map((elemento)=> path.join(route, elemento));}
//función para obtener los files .md
const mdRoute= (route) => {
     let totalArray= [];
    const pathAbsolute= absolutePath(route);
    if(verifyIsFile(pathAbsolute) && markdExt(pathAbsolute)=== '.md'){
        totalArray.push(pathAbsolute);
    } else if(isDirectory(pathAbsolute)){
        doublePath(pathAbsolute).forEach(element=> {
        const mdFiles=mdRoute(element); //irà rellenando en un array los archivos .md encontrados
        totalArray= totalArray.concat(mdFiles);//al terminar de buscar en el dir, concatenaran todos los archivosen un solo array
      });
    } else{
    return false};
     return totalArray
  }
// *  Función para extraer los links de un archivo .md, devuelve array de objetos
const getLinks = (route) => {
    const renderer = new marked.Renderer();
    console.log(renderer)
    let theLinks= [];
    mdRoute(route).forEach((file)=> {
     const md= readingFile(file);
     renderer.link = (href,title,text) => {
       let linksResult= {
          href: href, // url encontradas
          text: text, //Texto que aparecía dentro del link (<a>)
          file: file, //Ruta del archivo donde se encontró el link.
        }
        theLinks.push(linksResult)
      }
      marked.use({ renderer });
      marked.parse(md);
    });
    return theLinks
  }

console.log(getLinks('C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\md-link\\links.md'))
module.exports = {
    routeExist,
    absoluteroute,
    isDirectory,
    verifyIsFile,
    markdExt,
    readDirectory,
    doublePath,
    mdRoute,
    readingFile,
    };



