const path = require('path') // devuelve <booleano>
const fs = require('fs') 
const marked = require ('marked'); // undefined

const existenceOfaRoute = (routes) => fs.existsSync(routes);

/*   ---Convirtiendo rutas relativas a absolutas--- */
const pathTransformAbs = (routes) => path.isAbsolute(routes) ? routes : path.resolve(routes); 

const pathExtension = (routes) => path.extname (routes); 

/*  ---buscando archivos para leer con promesa---  */

const searchFiles = (routes) => fs.readFileSync(routes, 'utf-8'); 

 /*   ---Para comprobar si es un directorio---  */

//  isDirectory() // método que devuelve 'true' si es un directorio, 
//  luego de llamar a stats que es un objeto
//  que proporciona info sobre un archivo  o directorio:

const isDirectory = (routes) => fs.statSync(routes).isDirectory();
   

 //isFile() método que devuelve un booleano si es un archivo:
 
 const isFile = (routes) => fs.statSync(routes).isFile();

/*    ---imprimiendo los archivos que hay dentro del directorio   ---*/

const readDirectory = (dir) => fs.readdirSync(dir);
/*   ---crear un path con el archivo md ---   */

// path.join([...paths])  une rutas usando el seprados específicado: ',' '-'.

const validateFileMd = (routes) => {
    let filesMd = [];
    if (isFile(routes)) {
        filesMd.push(routes);
    } else { 
         readDirectory(routes).forEach(file => { 
             const route = path.join(routes, file);
             filesMd = filesMd.concat(validateFileMd(route))
                 });
     }
    const filterByMdFiles = filesMd.filter((routes) => pathExtension(routes) === '.md');
    return filterByMdFiles;
    };

/*  ---funcion para extraer links--- */
const linksIntoMdFiles = (routes) => {
    const renderer = new marked.Renderer();
    let saveRoutesIntoArray = [];
    validateFileMd(routes).forEach((file) => {

        const readingMdFile = searchFiles(file);

        renderer.link = (href, title, text) => {

            let objWithLinks = {
                href: href,
                text: text,
                file: file,
            }
            saveRoutesIntoArray.push(objWithLinks);
        }

        marked.use({ renderer }) //uso mis valores renderizados, los que configuré
        marked.parse(readingMdFile)  //uso mi variable que ejecuta la lectura en el parseado

    });
    return saveRoutesIntoArray;
};

//console.log(validateFileMd('./files'));

//console.log(linksIntoMdFiles('C:/Users/USER/Desktop/laboratoria/LIM017-md-links/files'));


// console.log(readDirectory('C:/Users/USER/Desktop/laboratoria/LIM017-md-links/utils.js'));
// console.log(isFile('./utils.js'));
// console.log(isDirectory('./files'));
//console.log(pathTransformAbs('archivo2.md'))






module.exports = {existenceOfaRoute, pathTransformAbs, pathExtension, searchFiles, 
readDirectory, isFile, isDirectory, validateFileMd, linksIntoMdFiles};
