const stats = (arrayObj) => {
  const links = arrayObj.length;
  const totalLinks = arrayObj.map((element) => element.href);
  const uniqueLinks = new Set(totalLinks);
  return (`Total: ${links}\nUnique: ${uniqueLinks.size}`);
};
  
export const broken = (array) => {
    const status = array.filter((item) => item.status >= 400);
    return (`\nBroken: ${status.length}`);
}

const array3 = [
    {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md',
      status: 200,
      ok: 'Ok'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
      text: 'Funciones — bloques de código reutilizables - MDN',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md',
      status: 404,
      ok: 'Fail'
    },
    {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md'
    }
]

console.log(stats(array3))
console.log(broken(array3))