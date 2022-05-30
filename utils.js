const path = require('path') // devuelve <booleano>
const fs = require('fs')
const marked = require('marked'); // undefined
const axios = require('axios');
const chalk = require('chalk');

const existenceOfaRoute = (routes) => fs.existsSync(routes);

/*   ---Convirtiendo rutas relativas a absolutas--- */
const pathTransformAbs = (routes) => path.isAbsolute(routes) ? routes : path.resolve(routes);

const pathExtension = (routes) => path.extname(routes);

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

/*  ---función para validar el estado en que se encuentran los links----    */
const validatingLinks = (objWithLinks) => {
    // Un arreglo para guardar?

    const urlsArray = objWithLinks.map((link) => axios.get(link.href)
        .then((response) => {
        
            const statusText= ( response.status >= 200 ) && ( response <= 399 ) ? 'ok' : 'fail';
        
            return {
                href: link.href,
                text: link.text,
                file: link.file,
                status: response.status,
                ok: statusText,
            }
        })
        .catch( () => {
            
            return {
                href: link.href,
                text: link.text,
                file: link.file,
                status: '',
                ok: 'fail'
            }

        }));
    // axios hace peticiones al servidor
return Promise.allSettled(urlsArray).catch( error => console.log(error));

};


    /*  ---- para saber cuantos links hay---    */
     const numbersOfLinks = (objWithLinks) => {
        
        // contar cuantos elementos hay en el arrar
        const lengthOfLinks = objWithLinks.length;
        // crear una colección(solo con las urls) de valores únicos con Set
        const uniqueLinks =  new Set( objWithLinks.map(element => element.href));
        const stats = `${chalk.bold.magenta('Total: ')} ${chalk.magentaBright(lengthOfLinks)} \n${chalk.bold.yellow('Unique: ')}${chalk.bold.yellow(uniqueLinks.size)}`;
     return stats;
    };

    /*  --- para saber cuantos links rotos hay ---  */
    const brokenLinksFx = (objWithLinks) => {
        const broken = objWithLinks.filter(element => element.ok === 'fail')
        const stats = `${chalk.bold.red('Broken: ')} ${chalk.bold.red(broken.length)}`;
        return stats;
    };





module.exports = {
    existenceOfaRoute, pathTransformAbs, pathExtension, searchFiles,
    readDirectory, isFile, isDirectory, validateFileMd, 
    linksIntoMdFiles, validatingLinks, numbersOfLinks, brokenLinksFx,
};
