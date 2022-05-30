/* eslint-disable prefer-promise-reject-errors */
import {
  readaPathDirectory,
  getLinksFileMD,
  readaPathFile,
  getLinksofDirectory,
  validatePath,
  ifIsDirectory,
  ifIsFile,
  findMdFile,
  validateLinks
} from './api.js'

// Promesa planteada para que devuelva resultados solo ingresando ruta (falta validate y stast)
export const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    if (validatePath(path)) {
      if (ifIsDirectory(path)) {
        resolve(getLinksofDirectory(path))
      }
      if (ifIsFile(path)) {
        if (findMdFile(path)) {
          resolve(validateLinks(getLinksFileMD(path)))
        } else {
          reject('No se encontró ningun archivo MarkDown')
        }
      }
    } else {
      reject('La ruta es inexistente')
    }
  })
}

// mdLinks('')
