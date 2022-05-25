const fs = require('node:fs/promises');
const http = require('node:https')

fs.readFile('links.md', 'utf-8')
.then((contenidos) => {
  let links = contenidos.split('\n')
  for(let i=0; i<links.length; i++){
    console.log((i+1)+':'+links[i])
    http.get(links[i], (res) => {
      console.log(res.statusCode)
    })
  }
})
  


module.exports = () => {
  // ...
};
