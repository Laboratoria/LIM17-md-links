// import fs from 'fs';
// import path from 'path';
import {getArgPathAbsolute} from './util.js';
/* const fs = require('fs') */

// isAbsolute = Me permite verificar si es absoluta o no
const mdLinks = (argPath, options) => {
    if (!argPath) {
        console.log('no hay path');
        return
    }
    console.log(getArgPathAbsolute(argPath));
}
mdLinks(process.argv[2]);