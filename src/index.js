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