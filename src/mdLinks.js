const {  
  absolutePath,
  existsRoute,
  objLinks,
  linksStatus
}= require('./index.js')

const mdLinks = (route, options) =>{
  const inputPath = absolutePath(route);
  const exitsPath = existsRoute(inputPath);
  const getObjLinks = objLinks(exitsPath);
  if(options){
   return linksStatus(getObjLinks)
  }
  else {
   return  objLinks(exitsPath);
  }
}

module.exports = {mdLinks};