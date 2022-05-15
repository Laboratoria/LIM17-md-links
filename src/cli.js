#!/usr/bin/env node

const { mdLinks } = require('./md-Links')

const inputPath = process.argv[2]
if (inputPath) {
  mdLinks(inputPath)
} else {
  console.log('Error.Ruta incorrecta, ingrese la ruta nuevamente')
}
