import chalk from 'chalk'

/*-----Función que devuelve Total y Unique Links-----*/
export const stats = (arrayObj) => {
  const links = arrayObj.length;
  const totalLinks = arrayObj.map((element) => element.href);
  const uniqueLinks = new Set(totalLinks);
  return (`${chalk.blueBright("Total:")} ${links} ${chalk.blueBright("\nUnique:")} ${uniqueLinks.size}`);
};
 
/*-----Función que devuelve Total, Unique y Broken Links-----*/
export const statsAndBroken = (arrayObj) => {
  const brokenLinks = arrayObj.filter((item) => item.status >= 400);
  const totalAndUnique = `${stats(arrayObj)} ${chalk.blueBright("\nBroken:")} ${brokenLinks.length}`;
  return totalAndUnique
};

/*-----Función para imprimir como string Validate con Option:True-----*/
export const showValidatedLinks = (arrayObj) => {  
  let completeObj = '';
  if(arrayObj.length === 0){
    completeObj = "No se encontraron links en la ruta proporcionada";
  } 
  if(arrayObj.length > 0){
    arrayObj.forEach((e) => {
      console.log('holaa')
      const appearance = e.message === ('OK'||'ok'||'Ok'||'oK') ? chalk.green(e.message) : chalk.red(e.message);
      console.log(appearance)
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

/*-----Función para imprimir como string Validate con Option:False-----*/
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

// export const broken = (array) => {
//     const status = array.filter((item) => item.status >= 400);
//     return (`Broken: ${status.length}`);
// }


const array3 = [
    {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md',
      status: 200,
      message: 'Ok'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
      text: 'Funciones — bloques de código reutilizables - MDN',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md',
      status: 404,
      message: 'Fail'
    },
    // {
    //   href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    //   text: 'recurso',
    //   file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md'
    // }
]

// const arrayTrue = [
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
//     text: 'expresiones regulares (`RegExp`)',
//     file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\pruebaFile\\muestra.md',
//     status: 200,
//     message: 'OK'
//   }
// ]

// console.log(stats(array3))
// console.log(statsAndBroken(array3))
//console.log(showValidatedLinks(arrayTrue))
//console.log(showUnvalidLinks(array3))