#!/usr/bin/env node
 
const { mdLinks } = require('./md-links.js')

const inputPath = process.argv[2]
if (inputPath) {
  mdLinks(inputPath)
} else {
  console.log('Error: Debe ingresar una ruta. Vuelva a intentarlo')
}
