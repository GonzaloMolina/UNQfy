
const picklify = require('picklify'); // para cargar/guarfar unqfy
const fs = require('fs'); // para cargar/guarfar unqfy
const Artist = require('./Clases/Artist');
const Playlist = require('./Clases/Playlist')

class UnQify {

  constructor(){
    this.artists = [];
    this.playlists = [];
  }
  // artistData: objeto JS con los datos necesarios para crear un artista
  //   artistData.name (string)
  //   artistData.country (string)
  // retorna: el nuevo artista creado
  addArtist(artistData) {
    const artist = new Artist(artistData.name, artistData.country);
    this.artists.push(artist);
    return artist;
  /* Crea un artista y lo agrega a unqfy.
  El objeto artista creado debe soportar (al menos):
    - una propiedad name (string)
    - una propiedad country (string)
  */
  }


  // albumData: objeto JS con los datos necesarios para crear un album
  //   albumData.name (string)
  //   albumData.year (number)
  // retorna: el nuevo album creado
  addAlbum(artistId, albumData) {
    const album = this.getArtistById(artistId);//this.artists.filter(artist => artist.id == artistId)[0].setAlbum(albumData.name, albumData.year);
    return album.setAlbum(albumData.name, albumData.year);
  /* Crea un album y lo agrega al artista con id artistId.
    El objeto album creado debe tener (al menos):
     - una propiedad name (string)
     - una propiedad year (number)
  */
  }


  // trackData: objeto JS con los datos necesarios para crear un track
  //   trackData.name (string)
  //   trackData.duration (number)
  //   trackData.genres (lista de strings)
  // retorna: el nuevo track creado
  addTrack(albumId, trackData) {
  /* Crea un track y lo agrega al album con id albumId.
  El objeto track creado debe tener (al menos):
      - una propiedad name (string),
      - una propiedad duration (number),
      - una propiedad genres (lista de strings)
  */
    const album = this.getAlbumById(albumId);
    return album.setTrack(trackData.name, trackData.duration, trackData.genres);
  }

  createPlaylist(name, genresToInclude, maxDuration) {
    /*** Crea una playlist y la agrega a unqfy. ***
      El objeto playlist creado debe soportar (al menos):
        * una propiedad name (string)
        * un metodo duration() que retorne la duración de la playlist.
        * un metodo hasTrack(aTrack) que retorna true si aTrack se encuentra en la playlist.
    */
     // name: nombre de la playlist
     // genresToInclude: array de generos
     // maxDuration: duración en segundos
     // retorna: la nueva playlist creada
      const playlist = new Playlist(name, genresToInclude, maxDuration)
      this.playlists.push(playlist)
      return playlist
    }

  getArtistById(id) {
    return this.artists.find(artist => artist.getId() == id);
  }

  getAlbumById(id) {
    var artista = this.artists.find(artist => artist.existsAlbum(id));
    var album = artista.getAlbumById(id)
    return album
  }

  getTrackById(id) {

  }

  getPlaylistById(id) {

  }

  // genres: array de generos(strings)
  // retorna: los tracks que contenga alguno de los generos en el parametro genres
  getTracksMatchingGenres(genres) {

  }

  // artistName: nombre de artista(string)
  // retorna: los tracks interpredatos por el artista con nombre artistName
  getTracksMatchingArtist(artistName) {

  }

  searchByName(name) {
    const artists = this.artists.filter(artist => artist.name.includes(name));
    const albums = this.artists.flatMap(artist => artist.albums.filter(album => album.name.includes(name)));
    const tracks = this.artists.flatMap(artist => artist.albums.flatMap(album => album.tracks.filter(track => track.name.includes(name))));
    const playlists = this.playlists.filter(playlist => playlist.name.includes(name));
    return { artists, albums, tracks, playlists };
  }

  deleteArtist(id) {
    const artistToDelete = this.getArtistById(id);
    artistToDelete.delete();

    this.artists = this.artists.filter(artist => artist.getId() !== artistToDelete.getId());
  }

  deleteAlbum(id) {
    const artistWithAlbum = this.artists.find(artist => artist.getAlbumById = this.getAlbumById(id));
    artistWithAlbum.deleteAlbum(id);
  }

  save(filename) {
    const serializedData = picklify.picklify(this);
    fs.writeFileSync(filename, JSON.stringify(serializedData, null, 2));
  }

  static load(filename) {
    const serializedData = fs.readFileSync(filename, {encoding: 'utf-8'});
    //COMPLETAR POR EL ALUMNO: Agregar a la lista todas las clases que necesitan ser instanciadas
    const classes = [UnQify];
    return picklify.unpicklify(JSON.parse(serializedData), classes);
  }
}

// COMPLETAR POR EL ALUMNO: exportar todas las clases que necesiten ser utilizadas desde un modulo cliente
module.exports = {
  UnQify: UnQify,
};

