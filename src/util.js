import fetch from "node-fetch";

/*-----Función para obtener un array de objetos con las propiedades(href, text, file, status, message)-----*/
export const validateLinks = (arrayOb) =>{
    const arrayValidateLinks = arrayOb.map((element) =>
     fetch(element.href)
      .then((res)=>{
        if (res.status >= 200 && res.status <400) {
          element.status = res.status,
          element.message = 'OK'
          return element
        }else{
          element.status = res.status,
          element.message = 'FAIL'
          return element
        }
      })
      .catch(()=>{
          element.status = 500
          element.message = 'FAIL'
          return element
      })
    )
    return Promise.all(arrayValidateLinks)
}

// const array1 = [  {
//     href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
//     text: 'recurso',
//     file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md'
//   }
// ]

// validateLinks(array1).then((res) => {
//     console.log(res)
//   });