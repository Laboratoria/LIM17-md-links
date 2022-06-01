const fs = require('fs');
const path = require('path');
// const fetch = require('node-fetch');

const existRoute = (inputPath) => fs.existsSync(inputPath);
console.log(fs.existsSync("C:\Users\Joss\Documents\GitHub\LIM017-md-links\exampleFile"))

const convertToAbsolute = (inputPath) => {
  if (path.isAbsolute(inputPath)) {
    return inputPath;
  } else {
    return path.resolve(inputPath);
  }
};
console.log(path.isAbsolute("/test/demo_path.js"));
console.log(path.isAbsolute("test/demo_path.js"));

const verifyDirectory = (inputPath) => {
  getInformation = fs.statSync(inputPath);
  return getInformation.isDirectory();
};
console.log(fs.statSync("./exampleFile"));

const openedDirectory = (inputPath) => {
  let files = fs.readdirSync(inputPath);
  console.log(fs.readdirSync("./exampleFile"));
  let arrayFiles = [];
  files.forEach((file) => {
    const pathChild = path.resolve(inputPath, file);
    if (fs.statSync(pathChild).isFile()) {
      
      arrayFiles.push(pathChild);
    } else {
      const directory = openedDirectory(pathChild);
      arrayFiles = arrayFiles.concat(directory);
    }
  });
  return arrayFiles;
};
console.log(fs.readdirSync("./exampleFile"));


const filterFile = (array) => array.filter(file => path.extname(file) == ".md");


const gettinlinks = (arrPath) => {
  const regExp = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gi;
  const regExpText = /\[(.*)\]/g;
  const regExpURL = /\(((?:\/|https?:\/\/).*)\)/g;
  let arrLinks = [];
  if (arrPath.lengeth > 0) {
    arrPath.forEach((path) => {
      const contents = fs.readFileSync(path, "utf8");
      const arrLinksFile = contents.match(regExp);
      if (arrLinksFile) {
        let arrayDataFile = [];
        arrLinksFile.forEach((link) => {
          const resolveLinks = link.match(regExpURL).join().slice(1, -1);
          const resolveText = link.match(regExpText).join().slice(1, -1);
          const object = {
            href: resolveLinks,
            text: resolveText.substring(0, 50),
            file: path,
          };
          arrayDataFile.push(object);
        });
        arrLinks = arrLinks.concact(arrayDataFile);
      }
    });
  }
  return arrLinks;


};

const statusLinks = (arrLinks) => {
  const arr =arrLinks.map((element) => {
    const fetchPromise = fetch(element.href)
    .then((response) =>{
      const statusCode = response.status;
      const msg = response.status >= 200 && response.status <= 299 ? response.statusText : 'FAIL';
      return {
        href: element.href,
        text: element.text,
        file: element.file,
        status: statusCode,
        message: msg,
      };
    })
    .catch(() => ({
      href: element.href,
      text: element.text,
      file: element.file,
      status: 'Failed request',
      ok: 'fail',
    }));
  return fetchPromise;
});
return Promise.all(arr);
};

module.exports = {
  existRoute,
  convertToAbsolute,
  verifyDirectory,
  openedDirectory,
  filterFile,
  gettinlinks,
  statusLinks
};
