#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import { mdLinks } from './index.js'
import chalk from 'chalk'
const entryArray = process.argv
const entryPath = entryArray[2]
mdLinks(entryPath)
