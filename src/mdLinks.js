const {  
  absolutePath,
  existsRoute,
  objLinks,
  linksStatus
}= require('./index.js')

const mdLinks = (route, options) =>{
  return new Promise ((resolve, reject) => {
  const inputPath = absolutePath(route);
  if (existsRoute(inputPath)){
    const getObjLinks = objLinks(inputPath);
    if(options){
      resolve(linksStatus(getObjLinks)) 
     }
     else {
      resolve(objLinks(inputPath));
     }
  } else {
    reject("La ruta no existe, vuelva a ingresar una ruta") 
  }
  }
)}

module.exports = {mdLinks};