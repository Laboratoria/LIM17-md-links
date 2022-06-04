import { routeExists, getRouteFileAndDirectory, getLinks } from './api.js'
import { validateLinks } from './util.js'

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
                reject ('Este archivo no tiene links')
            }
        }else{
            reject ('La ruta no tiene archivos MD')
        }
    }else{
        reject ('La ruta ingresada no existe')
    }
})
return promise
};

// const route = 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile'

// mdLinks(route, {validate:true}).then((res) =>{ console.log(res)}).catch((err) => console.log(err));
// mdLinks(route, {validate:false}).then((res) =>{ console.log(res)}).catch((err) => console.log(err));