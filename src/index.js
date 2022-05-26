const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

let inputRoute = process.argv[2];

const absolutePath = (inputRoute) =>
  path.isAbsolute(inputRoute) ? inputRoute : path.resolve(inputRoute);
const existsRoute = (inputRoute) =>
  fs.existsSync(inputRoute) ? inputRoute : "NA";
const isFolder = (inputRoute) => fs.statSync(inputRoute).isDirectory();

const getFileFolder = (inputRoute) => {
  let arrCotainer = [];
  let arrContainerFalse = [];
  if (isFolder(inputRoute) === false && path.extname(inputRoute) === ".md") {
    arrCotainer.push(inputRoute);
  } else if (isFolder(inputRoute) === false) {
    arrContainerFalse.push(inputRoute);
  } else {
    const listaDir = fs.readdirSync(inputRoute);
    listaDir.map((el) => {
      const newRoute = path.join(inputRoute, el);
      const newContainer = getFileFolder(newRoute);
      arrCotainer = arrCotainer.concat(newContainer);
    });
  }
  return arrCotainer;
};

console.log(getFileFolder(inputRoute));

const getLinks = (inputFile) => {
  const linkExpReg =
    /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
  const urlExpReg = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
  const textExpReg = /\[[\w\s\d.()]+\]/;
  const arrLinks = fs.readFileSync(inputFile, "utf-8").match(linkExpReg);
  return arrLinks.map((links) => {
    const hrefLinks = links.match(urlExpReg).join().slice(1, -1);
    const textLinks = links.match(textExpReg).join().slice(1, -1);

    const dataLinks = {
      href: hrefLinks, //href: URL encontrada.
      text: textLinks, // text: Texto que aparecía dentro del link.
      file: absolutePath(inputFile), // file: Ruta del archivo donde se encontró el link.
    };
    return dataLinks;
  });
};

const arrLinksMd = getFileFolder(inputRoute);
const linksCollection = arrLinksMd.map((file) => getLinks(file));

const linksStatus = (linksCollection) => {
  const arrStatus = linksCollection[0].map((el) => {
    const fetchObj = fetch(el.href)
      .then((res) => {
        const msgStatus =
          res.status >= 200 && res.status <= 299 ? "ok" : "fail";
        const objStatus = {
          href: el.href, //href: URL encontrada.
          text: el.text, // text: Texto que aparecía dentro del link.
          file: el.file, // file: Ruta del archivo donde se encontró el link.
          status: res.status, // Código de respuesta HTTP.
          ok: msgStatus, //Mensaje 'fail' en caso de fallo u 'ok' en caso de éxito.
        };
        return objStatus;
      })
      .catch(() => ({
        href: el.href,
        text: el.text,
        file: el.file,
        status: "Fail: Your request failed",
        ok: "fail",
      }));
    return fetchObj;
  });
  return Promise.all(arrStatus);
};

linksStatus(linksCollection).then((el) => console.log(el));

console.log('prueba')
module.exports = {
  existsRoute,
  absolutePath,
};
