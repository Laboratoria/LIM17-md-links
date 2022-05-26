import fs from 'fs'
import path from 'path'

// Función para determinar si la ruta es absoluta o no
export const determinateAbsolutePath = (pathRoot) => path.isAbsolute(pathRoot)

// Función para convertir ruta en absoluta
export const createAbsolutePath = (pathRoot) => path.resolve(pathRoot)

// Función para comprovar si la ruta existe o no
export const validatePath = (pathRoot) => fs.existsSync(pathRoot)

// Funciones para saber si el path es directorio o file
// saber si es file
export const ifIsFile = (pathRoot) => {
  const statsObj = fs.statSync(pathRoot)
  return statsObj.isFile()
}

// saber si es directorio
export const ifIsDirectory = (pathRoot) => {
  const statsObj = fs.statSync(pathRoot)
  return statsObj.isDirectory()
}

// MOSTRAR EL CONTENIDO DE UN ARCHIVO
export const readaPathFile = (pathRoot) => fs.readFileSync(pathRoot).toString()


// mostrar contenido de un archivo MD
// export const getContentMdFile = (pathRoot) => {
//   return findMdFile(pathRoot) ? readaPathFile(pathRoot) : console.log('el archivo no es .md')
// }
// encontrar archivos con extensión de .md
export const findMdFile = (pathRoot) => path.extname(pathRoot) === '.md'

// leer un directorio (devuelve el contenido sin identifiacr si hay o no carpetas dentro)
export const readaPathDirectory = (pathRoot) => fs.readdirSync(pathRoot)

// recursividad / para obtener los archivos MD de cada directorio y acumularnos en un array (lee las carpetas de cada directorio)
export const getFilesMdofDirectory = (pathRoot) => {
  let arrayFiles = []
  readaPathDirectory(pathRoot).forEach(e => {
    const newPathDirectory = path.join(pathRoot, e)
    if (ifIsFile(newPathDirectory)) {
      if (findMdFile(newPathDirectory)) {
        arrayFiles.push(e)
      }
    } else {
      return arrayFiles = arrayFiles.concat(readaPathDirectory(newPathDirectory))
    };
  }
  )
  return arrayFiles
}

// export const getLinksFileMD = (content) => {
//   const regExLink = /\[([^\[]+)\]\(http?(.*)\)/gm
//   // const regExLink = /(?:(?:https|http?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm
//   const arrayLinks = content.match(regExLink)
//   return arrayLinks
// }
// Primera función CallBack
// Función que extrae links de los archivos md, si no hay devuelve array vacío
export const getLinksFileMD = (callback, pathRoot) => {
  const arrayLinks = []
  const fileContent = callback
  const foundLinksRegEx = /\[([^\[]+)\](\(.*\))/gm
  const contentLinkRegEx = /\[([^\[]+)\]\((.*)\)/
  const linksonMdFile = fileContent.match(foundLinksRegEx)
  linksonMdFile.forEach(link => {
    const foundLinksMd = link.match(contentLinkRegEx)
    if (foundLinksMd[2].includes('http')) {
      arrayLinks.push({
        href: foundLinksMd[1],
        text: foundLinksMd[2],
        file: pathRoot
      })
    }
  })
  return arrayLinks
}
