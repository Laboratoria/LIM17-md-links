const fs=require('fs');
const path=require('path');

//Define la ruta
let inputRoute= 'README.md';
console.log(inputRoute);

//Verifica si la ruta es absoluta
const absolutePath = (inputRoute) => path.isAbsolute(inputRoute)?path.isAbsolute(inputRoute):path.resolve(inputRoute);// original, que se EXPORTA (verificar)
console.log(absolutePath(inputRoute));
console.log(path.isAbsolute(path.resolve(inputRoute)));

const esAbsoluta = (inputRoute) => path.isAbsolute(inputRoute)//solo para probar cómo funciona
? console.log('es absoluta')
: path.resolve(inputRoute)?console.log('es absoluta'):console.log('no es absoluta');

console.log(esAbsoluta(inputRoute));

//Verifica si la ruta existe
const existsRoute = (inputRoute) => fs.existsSync(inputRoute);// original, que se EXPORTA
console.log(existsRoute(inputRoute));

const existeRuta = (inputRoute) => { //solo para probar cómo funciona
    if(fs.existsSync(inputRoute)){
      console.log("El archivo EXISTE!")
    } else {
      console.log("El archivo NO EXISTE!");
    };
};
console.log(existeRuta(inputRoute));

// Verifica si es una carpeta
const isFolder= (inputRoute) => fs.statSync(inputRoute).isDirectory();// original, que se EXPORTA
console.log(isFolder(inputRoute));

const esCarpeta= (inputRoute) => fs.statSync(inputRoute).isDirectory() ? console.log('Es carpeta'):('NO es carpeta');//solo para probar cómo funciona

//Obtiene la extension del archivo
const entensionMd = (inputRoute) => {//solo para probar cómo funciona
    console.log(esCarpeta(inputRoute));
    if(path.extname(inputRoute) === '.md'){
       console.log('Es un archivo md')
    }else{
      console.log('no es md')
    }
};
const mdExt = (inputRoute) => path.extname(inputRoute);// original, que se EXPORTA
// console.log(mdExt(inputRoute));
console.log(entensionMd(inputRoute))




//Verifica si  es un archivo 
const isFile = (inputRoute) => fs.readFileSync(inputRoute, 'utf-8'); // original, que se EXPORTA
// console.log(isFile(inputRoute));

const esArchivo= (inputRoute) => fs.readFileSync(inputRoute, 'utf-8')//solo para probar cómo funciona
? console.log( fs.readFileSync(inputRoute, 'utf-8'))
:('NO es archivo');

console.log(esArchivo(inputRoute));

module.exports = () =>{
    inputRoute,
    absolutePath,
    existsRoute,
    isFolder,
    mdExt,
    isFile 
};
