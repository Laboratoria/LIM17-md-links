import { getContentMdFile, getFilesMdofDirectory,determinateAbsolutePath, createAbsolutePath, validatePath, ifIsDirectory, ifIsFile,readaPathFile} from './api.js'
const mdlinks = (route) => {
validatePath(route)=== true ? console.log('Ruta existente') : console.log('Ruta no existente. Ingrese otra ruta.');
determinateAbsolutePath(route)=== true ? console.log('La ruta es absoluta') : console.log('La ruta es relativa... Convirtiendo');
console.log('la ruta relativa es : ' + createAbsolutePath(route));
if(ifIsDirectory(route)=== true){
    console.log(getFilesMdofDirectory(route));
}
if(ifIsFile(route)){
    getContentMdFile(route)
}
 //else{
//     console.log(getContentMdFile(route));
// }
// if(ifIsFile(route)=== true){
//     readaPathFile(route)
// }
};

mdlinks('exampleFile.txt');

//create second branch





