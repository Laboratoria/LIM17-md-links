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
// const arrLienks = fs.readFileSync(inputRoute, 'utf-8');
// console.log(arrLienks);

const getLinks = (inputRoute) => {
    const linkExpReg = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
    const urlExpReg = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
    const textExpReg = /\[[\w\s\d.()]+\]/;
    const arrLinks = fs.readFileSync(inputRoute, 'utf-8').match(linkExpReg);
    return arrLinks.map((links) => {
      const hrefLinks = links.match(urlExpReg).join().slice(1, -1);
      const textLinks = links.match(textExpReg).join().slice(1, -1);

      const dataLinks = {
        href: hrefLinks,//href: URL encontrada.
        text: textLinks,// text: Texto que aparecía dentro del link
        file: absolutePath(inputRoute)// file: Ruta del archivo donde se encontró el link.
      }
      return dataLinks
    });
  };
  
  console.log(getLinks(inputRoute));
  
// console.log(getFileFolder(inputRoute));
// const arrFilesMd = getFileFolder(inputRoute);
// arrFilesMd.map(file=> fs.readFileSync(file, 'utf8'));
  
// const linkRegExp =
  
// C:/Users/USER/Desktop/LIM17-md-links/Folder
//Folder/file1.md
//Folder\Folder1\file2.md
//Folder/file1.md
