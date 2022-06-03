import fs from "fs";
import path from "path";

export const routeExists = (route) => fs.existsSync(route);
export const isAbsolute = (pathRoute) => path.isAbsolute(pathRoute);
export const convertToAbsolute = (pathRoute) => (isAbsolute(pathRoute) ? pathRoute : path.resolve(pathRoute));
export const readFile = (pathRoute) => fs.readFileSync(pathRoute, "utf8")
export const isFile = (pathRoute) => fs.statSync(pathRoute).isFile();
//export const isDirectory = (pathRoute) => fs.statSync(pathRoute).isDirectory();
export const readDirectory = (pathRoute) => fs.readdirSync(pathRoute);
export const pullExtension = (pathRoute) => path.extname(pathRoute);

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

// const route = 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaDos.md'
// const route1 = [
//   'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md',
//   'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestraTwo.md',
//   'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\pruebaDirectorio\\file.md'
// ]

//console.log(routeExists(route))
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
//  validateLinks(getLinks(route)).then((res) => {
//     console.log(res)
//   });