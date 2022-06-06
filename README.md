
# "md-links-tata"

El presente proyecto es una librería de línea de comando ejecutable que se puede usar para buscar archivos de tipo markdown, verificando si dentro de ellos existen links.
La librería muestra los links, en caso de existir; además, cuenta con dos opciones, que son:
validar el estado en que estos se encuentran los links, y brindar información sobre cuantos links totales, únicos y rotos se han encontrado.

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, ...

## Librería

#### Sintaxis

```http
  md-links <path> [options]
```

| cli       | Type     | Description                 |
| :-------- | :------- | :-------------------------  |
| `md-links`| `Promise`| **Required**. md-links-tata |




## Instalación

Ejecute en su terminal el siguiente comando `npm i md-links-tata`

## Guía de uso

Ingrese en su terminal la línea de comando 'md-links', luego ingrese la ruta y si desea más información puede escoger alguna opción.

`md-links <path> [options]`

Para obtener ayuda ejecute el comando `md-links --help`

## Diagrama de flujo

![Diagrama de flujo](./MD-links-Diagram.drawio.svg)

##### Argumentos

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
Si la ruta pasada es relativa, se resuelve como relativa al directorio
desde donde se invoca node - _current working directory_).
* `options`: Un objeto con **únicamente** la siguiente propiedad:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función debe **retornar una promesa** (`Promise`) que **resuelva a un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades

Con `validate:false` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

Con `validate:true` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación puede ejecutarse de la siguiente
manera a través de la **terminal**:

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no valida si las URLs responden ok o no,
solo identifica el archivo markdown (a partir de la ruta que recibe como
argumento), analiza el archivo Markdown e imprime los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link.

#### Options

##### `--validate`

Si pasamos la opción `--validate` o `--v`, el módulo hace una petición HTTP, usando axios, para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--s` o `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--s` y `--v` o `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```


## Demo

![Opción validar estado de links](./validate.png)
![Opción para ver valores totales, únicos y rotos de links](./stats_validatepng)
![Ingresar una ruta sin escoger opciones](./validate_false.png)

## Autora

- [@LGomez96](https://github.com/LGomez96/LIM017-md-links)

