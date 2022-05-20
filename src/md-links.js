/* eslint-disable no-unreachable */
const fs = require('fs')
const path = require('path')

const files = fs.readdirSync('./exampleFile')
console.log(files)

const existRoute = (inputPath) => fs.existsSync(inputPath)

const checkAbsolute = (inputPath) => path.isAbsolute(inputPath)
console.log(path.isAbsolute('/test/demo_path.js'))
console.log(path.isAbsolute('test/demo_path.js'))

const convertToAbsolute = (inputPath) => {
  if (path.isAbsolute(inputPath)) {
    return inputPath
  } else {
    return path.resolve(inputPath)
  }
}

const isFolder = (inputPath) => fs.statSync(inputPath).isDirectory()

const getExtension = (inputPath) => path.extname(inputPath) === '.md'

module.exports = {
  existRoute,
  checkAbsolute,
  isFolder,
  convertToAbsolute,
  getExtension
}

// module.exports = () => {
// };
const { pathExists, checkIsDirectory, readDir, saveFile, filterFile } = require('./index.js')

const mdLinks = (path) => {
  if (pathExists(path)) {
    if (checkIsDirectory(path)) {
      const content = readDir(path)
      if (content) {
        const arrayContent = saveFile(content)
        return filterFile(arrayContent)
      } else {
        return 'Carpeta vacia'
      }
    } else {
      return getExtension(path) === '.md' ? 'Archivo markdown' : 'No es un archivo markdown'
    }
  } else {
    return 'La ruta ingresada no es correcta'
  };
}
module.exports = { mdLinks }
