import chalk from 'chalk'

/*-----Función para obtener Total y Unique Links-----*/
export const stats = (arrayObj) => {
  const links = arrayObj.length;
  const totalLinks = arrayObj.map((element) => element.href);
  const uniqueLinks = new Set(totalLinks);
  return (`${chalk.blueBright("Total:")} ${links} ${chalk.blueBright("\nUnique:")} ${uniqueLinks.size}`);
};
 
/*-----Función para obtener Total, Unique y Broken Links-----*/
export const statsAndBroken = (arrayObj) => {
  const brokenLinks = arrayObj.filter((item) => item.status >= 400);
  const totalAndUnique = `${stats(arrayObj)} ${chalk.blueBright("\nBroken:")} ${brokenLinks.length}`;
  return totalAndUnique
};

/*-----Función para obtener como string Validate con Option:True-----*/
export const showValidatedLinks = (arrayObj) => {  
  let completeObj = '';
  if(arrayObj.length === 0){
    completeObj = "No se encontraron links en la ruta proporcionada";
  } 
  if(arrayObj.length > 0){
    arrayObj.forEach((e) => {
      const appearance = (e.message === 'OK'|| e.message ==='ok'|| e.message ==='Ok'|| e.message ==='oK') ? chalk.green(e.message) : chalk.red(e.message);
      completeObj += `
      ${chalk.yellow('Link:')} ${e.href}
      ${chalk.yellow('Name:')} ${e.text.substring(0, 50)}
      ${chalk.yellow('Path:')} ${e.file}
      ${chalk.yellow('Status:')} ${e.status}
      ${chalk.yellow('Message:')} ${appearance}
      `;
    })
  }
  return completeObj
}

/*-----Función para obtener como string Validate con Option:False-----*/
export const showUnvalidLinks = (arrayObj) => {
  let incompleteObj = ''
  if (arrayObj.length > 0) {
    arrayObj.forEach((e)=>{
      incompleteObj +=`
      ${chalk.yellow('Link:')} ${e.href}
      ${chalk.yellow('Name:')} ${e.text.substring(0, 50)}
      ${chalk.yellow('Path:')} ${e.file}
      `
    });
  } else {
    return "No se encontraron links en la ruta proporcionada"
  }
  return incompleteObj
}

// const arrayTrue = [
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
//     text: 'expresiones regulares (`RegExp`)',
//     file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md',
//     status: 200,
//     message: 'oK'
//   }
// ]
// console.log(stats(arrayTrue))
// console.log(statsAndBroken(arrayTrue))
// console.log(showValidatedLinks(arrayTrue))
// console.log(showUnvalidLinks(arrayTrue))