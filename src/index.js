const fs = require("fs");
const path = require("path");


//funcion que convierte la ruta en absoluta
const absolute_Path = (route) =>path.isAbsolute(route) ? route : path.resolve(route);
//console.log(absolute_Path('prueba/prueba/'))
//funcion que verifica si la ruta existe 
const existRoute = (route) => fs.existsSync(route); 
//console.log('¿existe la ruta?' + exists_Route('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\src'))
//funcion que verifica si es un directorio
const is_Directory= (route) => fs.statSync(route).isDirectory();
//console.log('¿Es un directorio?' + is_Directory('C:\\Users\\Arel\\Documents\\GitHub\\LIM017-md-links\\src'))
////verificar si la ruta es un archivo
const is_File = (route) => fs.statSync(route).isFile();
//verifica que archivos tienen la extensión .md
const extname_Md = (route) => path.extname(route);
//console.log(read_Md('index.js'))
//encuentra los archivos 
const read_Directory= (route) => fs.readdirSync(route);
//leer el archivo
const readFile = (route) => fs.readFileSync(route, 'utf8');
//unir dos rutas 
const join_Routes= (route) => {
return read_Directory(route).map((elemento)=> path.join(route, elemento));}
//función para obtener los files .md
const md_Route= (route) => {
     let array_Files= [];
    const path_Absolute= absolute_Path(route);
    if(is_File(path_Absolute) && extname_Md(path_Absolute)=== '.md'){
        array_Files.push(path_Absolute);
    } else if(is_Directory(path_Absolute)){
        join_Routes(path_Absolute).forEach(element=> {
        const md_Files=md_Route(element); //irà rellenando en un array los archivos .md encontrados
        array_Files=  array_Files.concat(md_Files);//al terminar de buscar en el dir, concatenaran todos los archivosen un solo array
      });
    };
    return array_Files
  }

//console.log(md_Route('../README.md')+ '¿me estas leyendo?')
module.exports = {
    existRoute,
    absolute_Path,
    is_Directory,
    is_File,
    extname_Md,
    read_Directory,
    join_Routes,
    md_Route,
    readFile,
    };



