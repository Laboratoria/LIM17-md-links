const fs = require("fs");
const path = require("path");
const marked = require('marked');
const fetch= require('node-fetch');



//funcion que convierte la ruta en absoluta
const absolutePath = (route) =>path.isAbsolute(route) ? route : path.resolve(route);
//console.log(absolute_Path('prueba/prueba/'))
//funcion que verifica si la ruta existe 
const existRoute = (route) => fs.existsSync(route); 
//console.log('¿existe la ruta?' + exists_Route('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\src'))
//funcion que verifica si es un directorio
const isDirectory= (route) => fs.statSync(route).isDirectory();
//console.log('¿Es un directorio?' + is_Directory('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\src'))
////verificar si la ruta es un archivo
const isFile = (route) => fs.statSync(route).isFile();
//verifica que archivos tienen la extensión .md
const extnameMd = (route) => path.extname(route);
//console.log(read_Md('index.js'))
//encuentra los archivos 
const readDirectory= (route) => fs.readdirSync(route);
//leer el archivo
const readFile = (route) => fs.readFileSync(route, 'utf8');
//unir dos rutas 
const joinRoutes= (route) => {
return readDirectory(route).map((elemento)=> path.join(route, elemento));}
//función para obtener los files .md
const mdRoute= (route) => {
     let arrayFiles= [];
    const pathAbsolute= absolutePath(route);
    if(isFile(pathAbsolute) && extnameMd(pathAbsolute)=== '.md'){
        arrayFiles.push(pathAbsolute);
    } else if(isDirectory(pathAbsolute)){
        joinRoutes(pathAbsolute).forEach(element=> {
        const mdFiles=mdRoute(element); //irà rellenando en un array los archivos .md encontrados
        arrayFiles=  arrayFiles.concat(mdFiles);//al terminar de buscar en el dir, concatenaran todos los archivosen un solo array
      });
    } else{
    return false};
     return arrayFiles
  }
// *  Función para extraer los links de un archivo .md, devuelve array de objetos
const getLinks = (route) => {
    const renderer = new marked.Renderer();
    let theLinks= [];
    
    mdRoute(route).forEach((file)=> {
     const md= readFile(file);
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
  //obtener los status de los links
const getLinksStatus = (arrLinks) => {
  const statusOfLinks = arrLinks.map((element) => 
   fetch(element)
   .then((res)=>{
        element.status = res.status,
        element.message= (res.status >= 200) && (res.status <= 399) ? 'ok' :'fail';
        return element;
      })
   .catch((error) => {
          return {
          href: element.href,
          text: element.text,
          file: element.file,
          status: 'Not found'+ error,
          message: 'fail'
     }      
    })
  )
 return Promise.all(statusOfLinks);
}


/*const statusLink =(getLinksStatus(getLinks('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\prueba\\prueba2.md')))
statusLink.then( res => console.log(res)).catch( error => console.log(error));*/
module.exports = {
    existRoute,
    absolutePath,
    isDirectory,
    isFile,
    extnameMd,
    readDirectory,
    joinRoutes,
    mdRoute,
    readFile,
    getLinks,
    getLinksStatus,
    };



