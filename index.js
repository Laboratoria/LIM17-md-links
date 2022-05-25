import { readaPathFile, getFilesMdofDirectory, determinateAbsolutePath, createAbsolutePath, validatePath, ifIsDirectory, ifIsFile } from './api.js'
export const mdlinks = (route) => {
  validatePath(route) === true ? console.log('Ruta existente') : console.log('Ruta no existente. Ingrese otra ruta.')
  determinateAbsolutePath(route) === true ? console.log('La ruta es absoluta') : console.log('La ruta es relativa... Convirtiendo')
  console.log('la ruta relativa es : ' + createAbsolutePath(route))
  if (ifIsDirectory(route) === true) {
    console.log(getFilesMdofDirectory(route))
  }
  if (ifIsFile(route)) {
    console.log(readaPathFile(route))
  }
}

mdlinks('exampleFileMD.md')
//mdlinks('archivosdeprueba')
