#!/usr/bin/env node
import chalk from "chalk";
import { mdLinks } from "../src/md-links.js";
import {
  showValidatedLinks,
  showUnvalidLinks,
  stats,
  statsAndBroken,
} from "../src/statistics.js";
//Capturando argumentos de la línea de comando
const [,, ...args] = process.argv;
const pathToEvaluate = args[0];
const inputPos = [];
for (let i = 1; i < args.length; i++) {
  inputPos.push(args[i]);
}
const newInputPos = inputPos.join(' ');

const help = `${chalk.green(
  "--validate"
)} Muestra el link, el texto, la ruta, el status y el mensaje.
${chalk.green("--stats")} Muestra el total de links y los links únicos.
${chalk.green("--stats --validate")} Muestra los links totales, únicos y rotos.
${chalk.cyan(
  `Utilice esta estructura: md-links <ruta> <comando> para ejecutar el cli, también puedes escribir md-links <ruta> y obtendrás el enlace, su texto y su archivo.`
)}`;

/*-----Función para obtener un resumen según las opciones del usuario-----*/
export const showSummary = (path, options) => {
  if (options.length > 0) {
    /*Cuando mi opcion es --validate*/
    if (options === "--validate") {
      return mdLinks(path, { validate: true }).then((links) =>
        showValidatedLinks(links)
      );
    }
    /*Cuando mi opcion es --stats*/
    if (options === "--stats") {
      return mdLinks(path, { validate: true }).then((links) => stats(links));
    }
    /*Cuando mi opcion es --validate --stats*/
    if (options === "--stats --validate" || options === "--validate --stats") {
      return mdLinks(path, { validate: true }).then((links) =>
        statsAndBroken(links)
      );
    }
    return Promise.resolve(help);
 }
  return mdLinks(path, { validate: false }).then((links) =>
    showUnvalidLinks(links)
  );
};

if (pathToEvaluate === undefined) {
  console.log(help);
} else {
  showSummary(pathToEvaluate, newInputPos)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

// const path = 'D:/BOOTCAMP-GITHUB/Repos/LIM017-md-links/pruebsssa.md'
// showSummary(path, '--validate').then((res) =>{ console.log(res)}).catch((err) => console.log("err"))
