/* eslint-disable no-unused-expressions */
import fs from 'fs'
import path from 'path'

const arrayLinks = []

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

// encontrar archivos con extensión de .md
export const findMdFile = (pathRoot) => path.extname(pathRoot) === '.md'

// leer un directorio (devuelve el contenido sin identifiacr si hay o no carpetas dentro)
export const readaPathDirectory = (pathRoot) => fs.readdirSync(pathRoot)

// recursividad / para obtener los archivos MD de cada directorio y encontrar los links en cada archivo de cada direcrtorio
export const getLinksofDirectory = (callback, pathRoot) => {
  callback.forEach(e => {
    const newPathDirectory = path.join(pathRoot, e)
    if (ifIsFile(newPathDirectory)) {
      if (findMdFile(newPathDirectory)) {
        const links = getLinksFileMD(readaPathFile(newPathDirectory), newPathDirectory)
        arrayLinks.push(links)
      }
    } else {
      getLinksofDirectory(readaPathDirectory(newPathDirectory), newPathDirectory)
    };
  }
  )
  return arrayLinks
}

// Primera función CallBack
// Función que extrae links de los archivos md, si no hay devuelve array vacío
export const getLinksFileMD = (callback, pathRoot) => {
  const fileContent = callback
  const foundLinksRegEx = /\[([^\[]+)\](\(.*\))/gm
  const contentLinkRegEx = /\[([^\[]+)\]\((.*)\)/
  const linksonMdFile = fileContent.match(foundLinksRegEx)
  if (linksonMdFile !== null) {
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
  }
  return arrayLinks
}
