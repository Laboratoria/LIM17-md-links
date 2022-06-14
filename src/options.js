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
───────────██            ██  ───────────────           ¿ＮＥＣＥＳＩＴＡＳ  ＡＹＵＤＡ？               ────
───────────██░░██        ██░░██─────────────                                                        ────
──────── ▄▄██░░▒▒████████▒▒░░██ ────────────     --validate : Obtienes el href, title, status y     ────
────────██▒▒░░░░▒▒▒▒░░▒▒░░░░▒▒██────────────                  message de cada link.                 ────
────────██▒▒░░░░░░░░░░░░░░░░░░██────────────       --stats : Obtienes como resultado                ────
────────██░░  ██  ░░██░░  ██  ██────────────                  Total (total de links) y              ────
────────██░░░░░░░░██░░██░░░░░░██────────────                  Unique (total de links únicos).       ────
────────██░░░░░░░░░░░░░░░░░░░░██────────────                                                        ────
────────────────────────────────────────────    --validate --stats : Obtienes como resultado        ────
────────────────────────────────────────────                          Total, Unique y Broken        ────
────────────────────────────────────────────                          (total de links fail).        ────
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
It is a command line interface (CLI) that helps the user to
check if the Mark down (md) files contain links and if they
work or not. Created by Angela J., my repository:
https://github.com/Arianajaramillo17/LIM017-md-links.git
____________________________________________________________`
   module.exports = {
    totalLinks,
    uniqueLinks,
    brokenLinks,
    help,
    author,
  }; 