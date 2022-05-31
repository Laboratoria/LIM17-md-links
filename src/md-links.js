import { routeExists, getRouteFileAndDirectory, getLinks } from './api.js'
import { validateLinks } from './util.js'

export const mdLinks = (path, options) => {
    const promise = new Promise((resolve, reject) => {
    if(routeExists(path)){
        const fileandDirectory= getRouteFileAndDirectory(path) 
        if(fileandDirectory.length){
            if(options.validate){
                resolve(validateLinks(getLinks(fileandDirectory)))
            }else{
                resolve(getLinks(fileandDirectory))
            }
        }else{
            reject (new Error('La ruta no tiene archivos MD'))
        }
    }else{
        reject (new Error ('La ruta ingresada no existe'))
    }
})
return promise
};


const route = 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile'

mdLinks(route, {validate:true}).then((res) => console.log(res)).catch(err => console.log(err));