# ⚒️ Markdown Links

## 1. Introducción

**MD-Links** Es una libreria que permite validar URL dentro de archivos Markdown(.md), esta libreria nos permitira obtener los estados de los enlaces tales como enlaces totales, unicos y enlaces rotos.

![md-links](https://github.com/JossFranco/LIM017-md-links/blob/dev/imagenes/links.jpg)
 
 ## 2.instrucciones de uso 🛠️

 Las siguentes instrucciones le permitiran instalar la biblioteca en su computadora para el desarrollo.

 ### 2.1 Instalacion 🧰
 La intalacion se puede realizar por npm:

 ```
$ npm i md-links-jossf

```
#### 2.2 Interfaz de Linea de Comando (CLI) ⚙️

Se ejecuta de la siguiente manera a través del terminal:

```sh
$ md-links <path> [options]
```

 Ejemplo: 

 ```sh
$ md-links carpeta_de_prueba
href: https://www.geeksforgeeks.org/how-to-run-node-js-program-as-an-executable/
text: a link
file: C:\Users\Joss\Documents\GitHub\LIM017-md-links\exampleFile
```
### 2.2.1 Opciones 

* ### --validate
Al pasar la opcion '--validate' la lobreria hara una peticion HTTP y regresara el status; si el link que corresponde al estado HTTP del rango 200 - 299,




























