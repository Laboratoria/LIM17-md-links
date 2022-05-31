#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import { mdLinks } from './index.js'
import chalk from 'chalk'

const entryArray = process.argv
// entrada de la ruta
const path = entryArray[2]
const option = entryArray[3]

mdLinks(path, option)
  .then((data) => {
    console.log(data)
  }).catch((data) => {
    console.log(data)
  })
