/* eslint-disable prefer-promise-reject-errors */
import {
  readaPathDirectory,
  getLinksFileMD,
  getLinksofDirectory,
  validatePath,
  ifIsDirectory,
  ifIsFile,
  findMdFile,
  validateLinks,
  determinateAbsolutePath,
  getStastLinks
} from './api.js'

// Promesa planteada para que devuelva resultados solo ingresando ruta (falta validate y stast)
export const mdLinks = (path, option = { validate: false }) => {
  return new Promise((resolve, reject) => {
    if (validatePath(path)) {
      const pathAbsolute = determinateAbsolutePath(path)
      let arrayLinks = []
      if (ifIsDirectory(pathAbsolute)) {
        if (readaPathDirectory(pathAbsolute).length !== 0) {
          arrayLinks = getLinksofDirectory(pathAbsolute)
          resolve(arrayLinks)
          if (getLinksofDirectory(pathAbsolute).length === 0) {
            reject('No se encontró ningún archivo .md')
          }
        } else {
          reject('Carpeta vacía')
        }
      }
      if (ifIsFile(pathAbsolute)) {
        if (findMdFile(pathAbsolute)) {
          arrayLinks = getLinksFileMD(pathAbsolute)
        } else {
          reject('La ruta ingresada no es .md')
        }
      }
      // añadimos el validar links
      // if (arrayLinks.length !== 0) {
      //   if (option.validate) {
      //     validateLinks(arrayLinks)
      //       .then((data) => {
      //         resolve(data)
      //       })
      //   }
      // }
    }
  })
}

// mdLinks('')
