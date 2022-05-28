#!/usr/bin/env node

const figlet = require('figlet');

const {
     optionValidate,
    optionStats,
    optionValidateStats,
    optionDefault,}= require('./options')

    path = process.argv[2];
    options = process.argv;