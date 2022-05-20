/* const {
  checkAbsolute,
  // isDirectory,
  convertToAbsolute
  // checkPathIsDirectory,
  // getExtension
} = require('./index.js')

const mdLinks = (path) => {
  while (!checkAbsolute(path)) {
    console.log('La ruta ingresada es relativa:', path)
    const path = convertToAbsolute(path)
    console.log('La ruta ha sido convertida en absoluta:', path)
  }
  return path
}
module.exports = { mdLinks }

/* const checkAbsolute = (inputPath) => {
  if (path.isAbsolute(inputPath)) {
    return inputPath
  } else {
    return path.resolve(inputPath)
  }
}

const isDirectory = (inputPath) => {
  isFile = fs.statSync(inputPath)
  return isFile.isDirectory()
}

*/
// };
const fs = require('fs')
const path = require('path')

const isAbsolute = (inputPath) => path.isAbsolute(inputPath) ? inputPath : path.resolve(inputPath)

const pathExists = (inputPath) => fs.existsSync(isAbsolute(inputPath))

const convertToAbsolute = (inputPath) => path.resolve(inputPath)

const checkIsDirectory = (inputPath) => fs.statSync(inputPath).isDirectory()

const getExtension = (inputPath) => path.extname(inputPath)

module.exports = {
  isAbsolute, pathExists, convertToAbsolute, checkIsDirectory, getExtension
}
