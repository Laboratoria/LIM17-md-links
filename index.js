import {  readaPathDirectory, getLinksFileMD, readaPathFile, getLinksofDirectory, determinateAbsolutePath, createAbsolutePath, validatePath, ifIsDirectory, ifIsFile } from './api.js'
export const mdlinks = (route) => {
  validatePath(route) === true ? console.log('Ruta existente') : console.log('Ruta no existente. Ingrese otra ruta.')
  determinateAbsolutePath(route) === true ? console.log('La ruta es absoluta') : console.log('La ruta es relativa... Convirtiendo')
  console.log('la ruta relativa es : ' + createAbsolutePath(route))
  if (ifIsDirectory(route) === true) {
    console.log(getLinksofDirectory(readaPathDirectory(route), route))
  }
  if (ifIsFile(route)) {
    console.log(getLinksFileMD(readaPathFile(route), route))
  }
}

// mdlinks('exampleFileMD.md')
mdlinks('archivosdeprueba')
