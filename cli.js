#! /usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { mdLinks } = require('./index');
const { brokenLinksFx, numbersOfLinks } = require('./utils');
const chalk = require('chalk');

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

// Ingresamos al elemento '_'  que recibe nuestra ruta y lo convertimos a srting
const pathName = argvs._.toString();

const cli = (pathName, options) => {

    if (options.validate && options.stats) {
        mdLinks(pathName, argvs)
            .then((res) => {
                console.table(chalk.italic.bgRed.black(brokenLinksFx(res)));
                console.table(chalk.italic.bgBlue.black(numbersOfLinks(res)))
            });

    } else if (options.stats) {
        mdLinks(pathName, argvs)
            .then((res) => console.table(chalk.bgCyan.bold.white(numbersOfLinks(res))))
            .catch((rej) => console.log(chalk.redBright(rej)))
    } else if (options.validate) {
        mdLinks(pathName, argvs)
            .then((res) => console.log(res))
            .catch((rej) => console.log(chalk.redBright(rej)))
    } else {
        mdLinks(pathName, options)
            .then((res) => {
                res.forEach(el => {
                    console.table(chalk`href: {rgb(255,131,0) ${el.href}}\ntext: ${el.text}\nfile: {green ${el.file}}`);
                });
            })

        console.log(chalk.italic.bgYellow.bold.magenta(' For more information "--help" '))
    }

}

cli(pathName, argvs)
