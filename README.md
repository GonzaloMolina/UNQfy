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
```
$ node main.js addArtist 'name' 'country'

$ node main.js artistsToList

$ node main.js deleteArtist 'artistId'

$ node main.js addAlbum 'artistId' 'name' 'year'

$ node main.js albumsToList

$ node main.js deleteAlbum 'albumId'

$ node main.js addTrack 'albumId' 'name' 'duration' 'genre1' 'genre2' ... 'genreN'

$ node main.js tracksToList

$ node main.js tracksOfGenre 'genre1' 'genre2' ... 'genreN'

$ node main.js tracksFromArtist 'artistName'

$ node main.js deleteTrack 'trackId'

$ node main.js createPlaylist 'name' 'genre1' ... 'genreN' 'maxDuration'

$ node main.js searchByName 'anySearch'
```
***
## Agregados - (2° Visado) ☁️💱

_Nuestro programa UNQfy ahora sincroniza y obtiene datos de Spotify y MusicMatch a través de sus APIs. Los nuevos comandos en el programa para utilizar estos servicios son los siguientes:_
```
$ node main.js getLyrics 'trackName'  (esto nos traerá la letra de la canción pasada como parámetro desde MusicMatch)
```
***NOTA: Previo a solicitar los comandos siguientes, ejecutar por consola $ node generateSpotifyCredencials.js para renovar credenciales de API Spotify.***
```
$ node main.js populateAlbumsForArtist 'artistName'  (esto nos traerá desde Spotify los albums populares del artista pasado como parámetro) NOTA: el artista debe existir.
```
**Adicionalmente, se realizó la creación de una API REST , a la cual se accede desde localhost:5000 ejecutando previamente el siguiente comando:**

```
$ node RESTservice.js
```
_Una vez esté corriendo express, la API estará escuchando en el puerto 5000 y puede ser consumida a través de las siguientes rutas:_

```
GET:
localhost:5000/api/artists
localhost:5000/api/albums
localhost:5000/api/tracks
localhost:5000/api/playlists

POST:
localhost:5000/api/artists/ 'NAME' + 'COUNTRY'
localhost:5000/api/albums/ 'ARTISTID' + 'NAME' + 'YEAR'
localhost:5000/api/playlists/ 'NAME' + 'DURATION' + 'GENRES'

PATCH:
localhost:5000/api/albums/'albumID' (+ 'YEAR' en body)

DELETE:
localhost:5000/api/artists/'artistID'
localhost:5000/api/albums/'albumID'
```

***
