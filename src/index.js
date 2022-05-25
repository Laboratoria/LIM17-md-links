const fs = require("fs");
const path = require("path");
let inputRoute = process.argv[2];

const absolutePath = (inputRoute) => path.isAbsolute(inputRoute) ? inputRoute : path.resolve(inputRoute);
const existsRoute = (inputRoute) => fs.existsSync(inputRoute)? inputRoute : "NA";
const isFolder = (inputRoute) => fs.statSync(inputRoute).isDirectory();

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

const getLinks = (inputFile) => {
    const linkExpReg = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
    const urlExpReg = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
    const textExpReg = /\[[\w\s\d.()]+\]/;
    const arrLinks = fs.readFileSync(inputFile, 'utf-8').match(linkExpReg);
    return arrLinks.map((links) => {
      const hrefLinks = links.match(urlExpReg).join().slice(1, -1);
      const textLinks = links.match(textExpReg).join().slice(1, -1);

      const dataLinks = {
        href: hrefLinks,//href: URL encontrada.
        text: textLinks,// text: Texto que aparecía dentro del link
        file: absolutePath(inputFile)// file: Ruta del archivo donde se encontró el link.
      }
      return dataLinks
    });
  };
  const arrLinksMd = getFileFolder(inputRoute);
  const linksCollection = arrLinksMd.map(file=> getLinks(file));
  console.log(linksCollection);

module.exports = {
  existsRoute,
  absolutePath
}
