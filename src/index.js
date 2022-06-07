import {
absolutePath,
yesRoute,
} from './md-links.js';
import chalk from 'chalk';

const path = '../pruebas/prueba1.md'
function mdBig (path){
  const convertedAbsolutepath = absolutePath(path)
  if(yesRoute(convertedAbsolutepath)){
    return'la ruta si existe';
  }else{
    return'la ruta no existe';
  } 
};
//console.log(mdBig(path));


