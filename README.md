# Markdown Links
![md-links](https://i.ibb.co/3yc2FSC/md-Links.png)

**MdLinks** permite  validar las URLs de los *archivos .md*


## Instrucciones de uso
### Instalación
Instale la libreria ingresando:


`npm install <github-user>/md-links`

##### Modo de uso
- Podrá ingresar dos opciones: *--validate* y/o *--stats* o ninguna de ellas
- Ingresar siempre el path (ruta del archivo/carpeta)

Sin opciones:

`md-links  path `

Devolvera los datos de la siguiente manera: 
* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

![md-links](https://i.ibb.co/c34Xn95/validate-False.png)

Con opción *--validate*
`md-links  path --validate `

Devolvera los datos de la siguiente manera: 
* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

![md-links](https://i.ibb.co/PMGRzBD/validate-True.png)

Con opción *--stats*

`md-links  path -- stats `

Devolvera los datos de la siguiente manera:
* `Total: 3`
* `Unique: 3 `

![md-links](https://i.ibb.co/r2Thjwp/stats.png)

Con opción *--validate --stats*

`md-links  path --validate --stats `

Devolvera los datos de la siguiente manera:
* `Total: 3`
* `Unique: 3 `
* `Broken: 1 `

![md-links](https://i.ibb.co/44JGB5F/validate-stats.png)


## Autor: 
[Emilce Aide Toledo](https://github.com/Emilce-Aide-Toledo)