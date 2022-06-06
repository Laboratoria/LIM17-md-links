const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const existRoute = (inputPath) => fs.existsSync(inputPath);

const convertToAbsolute = (inputPath) => {
  if (path.isAbsolute(inputPath)) {
    return inputPath;
  } else {
    return path.resolve(inputPath);
  }
};


const verifyDirectory = (inputPath) => {
  getInformation = fs.statSync(inputPath);
  return getInformation.isDirectory();
};

const openedDirectory = (inputPath) => {
  let listFiles = fs.readdirSync(inputPath);
  let arrayFiles = [];
  listFiles.forEach((file) => {
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

const filterFile = (array) => array.filter(file => path.extname(file) == ".md");

const gettinlinks = (arrPath) => {
  const regExp = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gi;
  const regExpText = /\[(.*)\]/g;
  const regExpURL = /\(((?:\/|https?:\/\/).*)\)/g;
  let arrLinks = [];
  if (arrPath.length > 0) {
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
        arrLinks = arrLinks.concat(arrayDataFile);
      }
    });
  }
  return arrLinks;


};

const statusLinks = (arrLinks) => {
  const arrPromesas = arrLinks.map((obj) => fetch(obj.href)
    .then((res) => ({
      res,
      href: obj.href,
      text: obj.text,
      file: obj.file,
      status: res.status,
      ok: res.ok ? 'OK' : 'FAIL',
    }))
    .catch(() => 'Existe un problema'));
  return Promise.all(arrPromesas);

   /* const array = arrLinks.map((element) => {
      const fetchPromise = fetch(element.href)
      .then((response) => {
        const statusCode = response.status;
        const msg = response.status >= 200 && response.status <= 299 ? 'OK' : 'FAIL';
        return {
          href: element.href,
          text: element.text,
          file: element.file,
          status: statusCode,
          message: msg,
        

        };
      })
      .catch(() => {
        return {
          href: element.href,
          text: element.text,
          file: element.file,
          status: "Failed request",
          message: 'FAIL',
        }
      });
      return fetchPromise;
    });
    return Promise.all(array);*/
  }

module.exports = {
  existRoute,
  convertToAbsolute,
  verifyDirectory,
  openedDirectory,
  filterFile,
  gettinlinks,
  statusLinks
};
