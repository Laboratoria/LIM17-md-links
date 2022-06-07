import fs from "fs";
import path from "path";

/*-----Función para determinar si la ruta existe-----*/
export const routeExists = (route) => fs.existsSync(route);

/*-----Función para determinar si la ruta existente es absoluta-----*/
export const isAbsolute = (pathRoute) => path.isAbsolute(pathRoute);

/*-----Función para convertir la ruta existente en absoluta-----*/
export const convertToAbsolute = (pathRoute) => (isAbsolute(pathRoute) ? pathRoute : path.resolve(pathRoute));

/*-----Función para leer un archivo-----*/
export const readFile = (pathRoute) => fs.readFileSync(pathRoute, "utf8")

/*-----Función para determinar si es un archivo-----*/
export const isFile = (pathRoute) => fs.statSync(pathRoute).isFile();

/*-----Función para leer un directorio-----*/
export const readDirectory = (pathRoute) => fs.readdirSync(pathRoute);

/*-----Función para determinar la extensión de un archivo-----*/
export const pullExtension = (pathRoute) => path.extname(pathRoute);

/*-----Función para obtener en un array todas los archivos con extensiones MD-----*/
export const getRouteFileAndDirectory = (pathRoute) => {
  let arrayPaths = [];
  const pathAbsolute = convertToAbsolute(pathRoute);
  if(isFile(pathAbsolute)){
    if(pullExtension(pathAbsolute) === '.md'){
       arrayPaths.push(pathAbsolute)
    }
  } else{
      const arrayPathsDirectory = readDirectory(pathAbsolute)
      arrayPathsDirectory.forEach((element) => {
          const newPath = path.join(pathAbsolute, element)
            arrayPaths = arrayPaths.concat(getRouteFileAndDirectory(newPath));
       })
  }
  return arrayPaths
}

/*-----Función para obtener en un array de objetos las propiedades(href, text, file) de los archivos MD-----*/
export const getLinks = (arrayFileMd) =>{
  let arrayContainerObj = [];
  arrayFileMd.forEach((file) => {
  const readFileLinks = readFile(file);
  const regExpLinks =  /\[([^\[]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
  const matches = readFileLinks.match(regExpLinks);
  if(matches!==null){
    const rexExpSingle = /\[([^\[]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/;
    matches.forEach((link) => {
      const match = rexExpSingle.exec(link)
      arrayContainerObj.push({
        href: match[2],
        text: match[1].substring(0, 50),
        file,
      })
    })}
  })
return arrayContainerObj
}

// const route = 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile'
// const route1 = [
//   'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md',
//   'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestraTwo.md',
//   'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\pruebaDirectorio\\file.md'
// ]

// console.log(routeExists(route))
// console.log(pathAbsolute(route))
// console.log(convertToAbsolute(route))
// console.log(readFile(route))
// console.log(isFile(route))
// console.log(isDirectory(route))
// console.log(readDirectory(route))
// console.log(getRouteWithPath(route))
// console.log(pullExtension(route))
// console.log(getRouteFileAndDirectory(route))
// console.log(getLinks(route1))