// Función para obtener la cantidad total de los links(guardados en un array) hallados en la ruta
const totalLinks = (arrayLinks) => arrayLinks.map((el) => el.href).length;

// Función para obtener la cantidad de los links unicos(unique) encontrados en la ruta
const uniqueLinks = (arrayLinks) => {
    const linksSet = new Set ([]);// almacena valores únicos irrepetibles
    arrayLinks.forEach((element) => linksSet.add(element.href));
    return linksSet.size
};

// Función para obtener la cantidad de los links rotos(broken) encontrados en la ruta
const brokenLinks = (arrayLinks) => {
    const broken = arrayLinks.filter((e)=> e.message=== 'fail');
    return broken.length;
};

const help = `
────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────                                                        ────
────────────────────────────────────────────            ¿ＮＥＣＥＳＩＴＡＳ  ＡＹＵＤＡ？            ────
────────────────────────────────────────────                                                        ────
────────────────────────────────────────────     --validate : Obtienes el href, title, status y     ────
───────────██            ██  ───────────────                  message de cada link.                 ────
───────────██░░██        ██░░██─────────────        --stats : Obtienes como resultado               ────
──────── ▄▄██░░▒▒████████▒▒░░██ ────────────                  Total (total de links) y              ────
────────██▒▒░░░░▒▒▒▒░░▒▒░░░░▒▒██────────────                  Unique (total de links únicos).       ────
────────██▒▒░░░░░░░░░░░░░░░░░░██────────────    --validate --stats : Obtienes como resultado        ────
────────██░░  ██  ░░██░░  ██  ██────────────    --stats --validate    Total, Unique y Broken        ────
────────██░░░░░░░░██░░██░░░░░░██────────────                          (total de links fail).        ────
────────██░░░░░░░░░░░░░░░░░░░░██────────────       --author : Obtienes como resultado la            ────
────────────────────────────────────────────                  descripción y autor de esta           ────
────────────────────────────────────────────                         librería.                      ────
────────────────────────────────────────────                                                        ────
────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────────────────────────────────`

const author= `    
                      
        ▓▓            ░▓█                        
      ██▒▒▒▒        ▒▒▒▒▓▒                      
      ██░░  ▓▓▒▒▒▒▒▒▒▒▓▓░░▓▓                ▒▒▒▒  
    ██▒▒░░░░▒▒▒▒░░▒▒░░░░▓▓██            ██▒▒░░██ 
    ██░░░░░░░░░░░░░░░░░░▒▒▓▓            ██▒▒▒▒██
  ██▒▒░░░░░░░░░░░░░░░░░░░░▓▓████████      ██▒▒██
  ██░░░░▓▓░░░░██░░░░██░░░░░░▒▒░░▒▒░░██    ██▒▒██
  ██░░░░░░░░██▒▒██░░░░░░░░░░▒▒░░▒▒░░▒▒▓▓████▒▒██
  ██░░░░░░░░░░░░▒▒░░░░░░░░░░░░░░░░░░░░▒▒██▒▒██  
  ██░░░░░░░░░╔═╦═╗╔╗  ╔╗  ╔╗╔═╗░░░░░░░░░██░░██  
  ██░░░░░░░░░║║║║╠╝║╔╗╠╬═╦╣╠╣═╣░░░░░░░░░░░██    
  ██▒▒░░░░░░░║║║║║╬║║╚╣║║║║═╬═║░░░░░░░░░░░██    
  ██▒▒░░░░░░░╚╩═╩╩═╝╚═╩╩╩═╩╩╩═╝░░░░░░░░░░░██    
  ██▒▒░░░Made by :░░░░░░░░░░░░░░░░░░░░░░░░██    
    ██▒▒░░░░░░░ANGELA JARAMILLO░░░░░░░░░▒▒██    
      ██▒▒░░░░░░░░░ESPINOZA░░░░░░░░░░░▒▒██      
        ██▒▒░░▒▒▒▒░░▒▒░░░░▒▒░░▒▒▒▒░░▒▒██        
        ░░▓▓░░████░░██▓▓██▓▓░░████░░██          
          ████░░░░████  ░░██▓▓░░  ████    
___________________________________________________________
Esta es una interfaz de línea de comando que ayuda al
usuario a verificar si los archivos Markdown(md) contienen
links y si estos son funcionales. Created by Angela J., 
my repository:
https://github.com/Arianajaramillo17/LIM017-md-links.git
____________________________________________________________`
   module.exports = {
    totalLinks,
    uniqueLinks,
    brokenLinks,
    help,
    author,
  }; 