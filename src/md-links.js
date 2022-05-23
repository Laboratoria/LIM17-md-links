const fs = require('fs')
const path = require('path')
const fetch = require("node-fetch")


const existRoute = (inputPath) => fs.existsSync(inputPath)
const convertToAbsolute = (inputPath) => {
  if (path.isAbsolute(inputPath)) {
    return inputPath
  } else {
    return path.resolve(inputPath)
  }
}
const checkAbsolute = (inputPath) =>{
 if( path.isAbsolute(inputPath)){
   return inputPath;
 }else{
   return path.resolve(inputPath)
 }
} 
console.log(path.isAbsolute('/test/demo_path.js'))
console.log(path.isAbsolute('test/demo_path.js'))

const verifyDirectory= (inputPath) =>{
  getInformation = fs.statSync(inputPath);
  return getExtension.isDirectory();
 }
 

const openedDirectory = (inputPath) => {
  let files = fs.readdirSync(inputPath);
  let arrayFiles=[];
  files.forEach((file) => {
    const pathChild = path.resolve(inputPath, file);
    if(fs.statSync(pathChild).isFile()) {
      arrayFiles.push(pathChild);
    } else {
      const directory= openedDirectory(pathChild);
      arrayFile= arrayFiles.concat(directory);
    }
  });
  return arrayFiles;
};
console.log(fs.readdirSync("./exampleFile"))


const filterFile = (arr) => arr.filter(file => path.extname(file) == ".md")
console.log(filterFile)

module.exports = {
  existRoute,
  checkAbsolute,
  verifyDirectory,
  convertToAbsolute,
  filterFile,
  openedDirectory
}

