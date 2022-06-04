#! /usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { mdLinks } = require('./index');
const { brokenLinksFx, numbersOfLinks } = require('./utils');
const chalk = require('chalk');
const { option, options } = require('yargs');


const argvs = yargs(hideBin(process.argv))
    .usage('Usage: md-links <path> [options]')
    .option('v', {
        alias: 'validate',
        describe: 'Validate url state of markdown files',
        type: 'boolean',
        default: false,
    })
    .option('s', {
        alias: 'stats',
        describe: 'Display the number of links that exist',
        type: 'boolean',
        default: false,
    })

    .help('h')
    .alias('h', 'help')
    .argv

// path
const pathName = argvs._.toString();

const cli = (pathName, options) => {


    if (options.validate) {
        mdLinks(pathName, argvs)
        .then((res) => console.log(res))
        .catch((rej) => console.log(chalk.redBright(rej)))
    } else if (options.stats) {
        mdLinks(pathName, argvs)
        .then((res) => console.log(chalk.bgCyan.bold.white(numbersOfLinks(res))))
        .catch((rej) => console.log(chalk.redBright(rej)))
    } else if (options.validate && options.stats) {
        mdLinks(pathName, options = {validate:false})
        .then((res) => {
            console.log(chalk.bgBlue.black(numbersOfLinks(res)))
           console.log (chalk.bgRed.black(brokenLinksFx(res)));
            
        })
    } else {
        console.log(chalk.italic.bgYellow.bold.magenta(' For more information "--help" '))
    }

}


// console.log(mdLinks('./files/folder/folder3'))

cli(pathName, argvs)

//console.log(argvs); 

// console.log(chalk ` CPU: {red ${15}%}
//     RAM: {green ${200 * 100}%}
//     DISK: {rgb(255,131,0) ${'algo mas'}%}
//     `);