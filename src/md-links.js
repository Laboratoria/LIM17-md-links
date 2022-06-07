import { routeExists, getRouteFileAndDirectory, getLinks } from './api.js'
import { validateLinks } from './util.js'
import chalk from 'chalk';

/*-----Función para obtener un array de objetos según las opciones {validate:true} y {validate:false}-----*/
export const mdLinks = (path, options) => {
    const promise = new Promise((resolve, reject) => {
    if(routeExists(path)){
        const fileandDirectory= getRouteFileAndDirectory(path)
        if(fileandDirectory.length > 0){
            const file = getLinks(fileandDirectory)
            if(file.length > 0){
                if(options.validate){
                resolve(validateLinks(file))
                }else{
                resolve(file)
                }
            }else{
                reject (chalk.red('ERROR: ') + 'Este archivo no tiene links')
            }
        }else{
            reject (chalk.red('ERROR: ') + 'La ruta no tiene archivos MD')
        }
    }else{
        reject (chalk.red('ERROR: ') + 'La ruta ingresada no existe')
    }
})
return promise
};