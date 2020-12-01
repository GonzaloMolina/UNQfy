# Seminario Web Cloud - Trabajo Final UNQfy - 2° Cuatrimestre 2020

## Autores ✒️

* **Gonzalo Molina** - [GonzaloMolina](https://github.com/GonzaloMolina)
* **Leonardo Di Carlo** - [leonardodicarlo](https://github.com/leonardodicarlo)

***

## Diseño UML - (1° Visado) 🛠️

[Link al UML](https://github.com/GonzaloMolina/UNQfy/blob/master/UML/unQify.png)

***

## Instalación (requiere previamente Node.js) 🔧

_Para correr nuestro programa UNQfy es necesario clonar este repositorio a un directorio local._
_Una vez clonado el repositorio, hay que abrir una consola ubicados en dicho directorio y ejecutar el comando:_
```
$ npm install
```
_Esto instalará todas las dependencias necesarias para correr UNQfy. Si quisieramos chequear que lo clonado está ok y el programa funciona, podemos correr el comando:_
```
$ npm test
```
_Este comando correrá todos los test provistos en el Trabajo Práctico y nos dará una devolución sobre su ejecución. Con esto ya estamos listos para utilizar UNQfy._

***

## Ejecución - Comandos soportados 📋

_Nuestro programa UNQfy soporta varios métodos para realizar ABM de Artists, Albums, Tracks y Playlists. En todos los casos se debe estar posicionado en el directorio donde se encuentra el repositorio y cada comando siempre inicia ejecutando el archivo main.js a través de Node:_
```
$ node main.js comando 'valor1' 'valor2' ... 'valorN'
```
**Los comandos soportados por UNQfy son los siguientes:**
