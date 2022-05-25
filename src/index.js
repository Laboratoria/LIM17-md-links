const fs = require("fs");
const path = require("path");

let inputRoute = process.argv[2];

const absolutePath = (inputRoute) => path.isAbsolute(inputRoute) ? inputRoute : path.resolve(inputRoute);
console.log(absolutePath(inputRoute));

const existsRoute = (inputRoute) => fs.existsSync(inputRoute)? inputRoute : false;
console.log('existe', inputRoute);

const isFolder = (inputRoute) => fs.statSync(inputRoute).isDirectory();
console.log('¿es directorio?', isFolder(inputRoute));

const getFileFolder = (inputRoute) =>{
let arrCotainer = [];
let arrContainerFalse=[];
if (isFolder(inputRoute) === false && path.extname(inputRoute) === ".md") { 
  arrCotainer.push(inputRoute);
} else if(isFolder(inputRoute) === false ){
  arrContainerFalse.push(inputRoute);
}else{ 
 const listaDir = fs.readdirSync(inputRoute);
  listaDir.map((el) => {
    const newRoute = path.join(inputRoute, el)
    const newContainer = getFileFolder(newRoute);
    arrCotainer = arrCotainer.concat(newContainer)
  }) 
  }
  return arrCotainer;
}
console.log(getFileFolder(inputRoute))


// console.log(getFileFolder(inputRoute));
// const arrFilesMd = getFileFolder(inputRoute);
// arrFilesMd.map(file=> fs.readFileSync(file, 'utf8'));
  
// const linkRegExp =
  
// C:/Users/USER/Desktop/LIM17-md-links/Folder
//Folder/file1.md
//Folder\Folder1\file2.md

