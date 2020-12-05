const picklify = require('picklify'); // para cargar/guarfar unqfy
const fs = require('fs'); // para cargar/guarfar unqfy
const Artist = require('./Clases/Artist');
const Album = require('./Clases/Album'); //Import Album
const Track = require('./Clases/Track'); //Import Track
const Playlist = require('./Clases/Playlist');
const ErrorDoesntExistsAlbum = require('./Errors/ErrorDoesntExistsAlbum');
const ErrorDoesntExistsArtist= require('./Errors/ErrorDoesntExistsArtist');
const ErrorDoesntExistsTrack= require('./Errors/ErrorDoesntExistsTrack');
const ErrorInsufficientParameters= require('./Errors/ErrorInsufficientParameters');
const ErrorRepeatAlbum= require('./Errors/ErrorRepeatAlbum');
const ErrorRepeatArtist= require('./Errors/ErrorRepeatArtist');
const ErrorRepeatTrack = require('./Errors/ErrorRepeatTrack');
const Counter = require('./Clases/Counter');
const SAVE_FILENAME = 'data.json'
const spotifyClient = require('./ApiClients/SpotifyClient')
const InstanceOfSpotify = new spotifyClient.SpotifyClient()
const musixMatchClient = require('./ApiClients/MusixMatchClient');
const instanceOfMusixMatch = new musixMatchClient.MusixMatchClient();
const NotifyObserver = require('./RESTapiNotify/NotifyObserver');
const notifyObserver = new NotifyObserver();

const rp = require('request-promise');


class UnQify {

  constructor(){
    this.artists = [];
    this.playlists = [];
    this.counter = new Counter();
    this.observers = [];
    //this.addObserver(notifyLog);
    this.addObserver(notifyObserver);
  }
  // artistData: objeto JS con los datos necesarios para crear un artista
  //   artistData.name (string)
  //   artistData.country (string)
  // retorna: el nuevo artista creado
  addArtist(artistData) {
    if (!artistData.name || !artistData.country) {
      throw new ErrorInsufficientParameters();
    }

    const check = this.artists.find(artist => artist.name === artistData.name);

    if(check) {
      throw new ErrorRepeatArtist();
    }

    const artist = new Artist(artistData.name, artistData.country);
    artist.setId(this.counter.getArtistId())
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
    if (artistId === undefined || !albumData.name || !albumData.year) {
      throw new ErrorInsufficientParameters();
    }

    const checkArtist = this.getArtistById(artistId);

    if(!checkArtist) {
      throw new ErrorDoesntExistsArtist();
    }
    const checkAlbum = this.getAllAlbums().find(album => album.getName() == albumData.name);
    if(checkAlbum) {
      throw new ErrorRepeatAlbum();
    }

    const artist = this.getArtistById(artistId);//this.artists.filter(artist => artist.id == artistId)[0].setAlbum(albumData.name, albumData.year);
    
    const album = new Album(albumData.name, albumData.year);
    album.setId(this.counter.getAlbumId())
    return artist.setAlbum(album);
  /* Crea un album y lo agrega al artista con id artistId.
    El objeto album creado debe tener (al menos)):
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
    if(albumId === undefined || !trackData.name || !trackData.duration || !trackData.genres) {
      throw new ErrorInsufficientParameters();
    }

    const checkAlbumInArtists = this.artists.find(artist => artist.existsAlbum(albumId));


    if(!checkAlbumInArtists) {
      throw new ErrorDoesntExistsAlbum();
    }

    //const checkTrack = this.getAllAlbums().flatMap(album => album.getTracks()).find(track => track.name === trackData.name);

    /*
    if(checkTrack) {
      throw new ErrorRepeatTrack();
    }
    */
    const album = this.getAlbumById(albumId);
    const track = new Track(trackData.name, trackData.duration, trackData.genres);
    track.setId(this.counter.getTrackId())
    return album.setTrack(track);
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
      const playlist = new Playlist(name, genresToInclude, maxDuration);
      var tracks = this.getTracksMatchingGenres(genresToInclude) ;
      playlist.setTrackList(tracks);
      playlist.setId(this.counter.getPlaylistId())
      this.playlists.push(playlist);
      return playlist;
  }

  addTrackToPlaylist(trackId, playlistId){
    const track = this.getTrackById(trackId);
    this.playlists.find(playlist => playlist.getId() == playlistId).addTrack(track);
  }
  
  getArtistById(id) {
    return this.artists.find(artist => artist.getId() === id);
  }

  getAlbumById(albumId) {
    var artist = this.artists.find(artist => artist.existsAlbum(albumId));
    return artist.getAlbumById(albumId);
  }

  getArtistByAlbumId(albumId){
    var artist = this.artists.find(artist => artist.existsAlbum(albumId));
    return artist;
  }

  getArtistByTrackId(trackId){
    var albums = this.getAllAlbums();
    var album = albums.find(album => album.existsTrack(trackId))
    var artist = this.getArtistByAlbumId(album.getId())
    return artist
  }

  getTrackById(trackId) {
    var tracks = this.getAllTracks();
    var tracksFiltrados = tracks.filter(track => typeof track !== 'undefined')
    var track = tracksFiltrados.find(track => track.id == trackId)
    if(!track){
      throw new ErrorDoesntExistsTrack();
    }
    return track;
  }

  getPlaylistById(id) {
    return this.playlists.find(playlist => playlist.getId() == id);
  }

  // genres: array de generos(strings)
  // retorna: los tracks que contenga alguno de los generos en el parametro genres
  getTracksMatchingGenres(genres) {
    const albumes = this.artists.flatMap(artist => artist.albums);
    const tracks = albumes.flatMap(album => album.tracks);
    return tracks.filter(t => t.genres.some(g => genres.includes(g)));
  }

  // artistName: nombre de artista(string)
  // retorna: los tracks interpredatos por el artista con nombre artistName
  getTracksMatchingArtist(artistName) {
    return this.artists.filter(artist => artist.name === artistName).flatMap(artist => artist.albums.flatMap(album => album.tracks))
  }

  getAllAlbums() {
    return this.artists.flatMap(artist => artist.getAlbums());
  }

  getAllAlbumsOfArtist(artistId) {
    var artist = this.artists.find(artist => artist.getId() === artistId);
    return artist.getAllAlbums();
  }

  getAlbumByName(albumName){
    var albums = this.getAllAlbums().find(album => album.getName() == albumName);
    return albums
  }

  getArtistsByName(artistName){
    if(typeof artistName === 'undefined'){
      const artists = this.artists.filter(artist => artist.name.toLowerCase().includes(''));
      return artists
    } else {
      const artists = this.artists.filter(artist => artist.name.toLowerCase().includes(artistName.toLowerCase()));
      return artists
    }
    
  }

  getArtistByName(artistName){
    return this.artists.find(artist => artist.getName().toLowerCase() == artistName.toLowerCase())

  }

  getAllArtists() {
    return this.artists;
  }

  getAllTracks() {
    return this.getAllAlbums().flatMap(album => album.tracks);
  }

  getTracksFromAlbum(albumId) {
    var artist = this.artists.find(artist => artist.existsAlbum(albumId));
    var album = artist.getAlbumById(albumId);
    return album.getTracks();
  }

  getTracksFromPlaylist(playlistId) {
    var playlist = this.getPlaylistById(playlistId);
    return playlist.getTracks();
  }

  getAlbumsByName(albumName){
    if(typeof albumName === 'undefined'){
      const albums = this.artists.flatMap(artist => artist.albums.filter(album => album.name.includes('')));
      return albums

    } else {
      const albums = this.artists.flatMap(artist => artist.albums.filter(album => album.name.toLowerCase().includes(albumName.toLowerCase())));
      return albums
    }
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
    if(typeof artistToDelete !== 'undefined'){
      const tracks = artistToDelete.getTracks();
      if(typeof tracks === 'undefined'){
        throw new ErrorDoesntExistsArtist();
      } else{
        tracks.forEach(track => this.deleteTrackInPlaylists(track.getId()));
        artistToDelete.delete();
      }
      this.artists = this.artists.filter(artist => artist.getId() !== artistToDelete.getId());
    } else{
      throw new ErrorDoesntExistsArtist();
    }
  }

  deleteAlbum(id) {
    const artist = this.artists.find(artist => artist.getAlbumById(id));
    const album = artist.getAlbumById(id);
    const tracks = album.getTracks();

    tracks.forEach(track => this.deleteTrackInPlaylists(track.getId()));
    artist.deleteAlbum(id);
  }

  deleteTrack(id) {
    this.deleteTrackInPlaylists(id);
    this.artists.forEach(artist => artist.searchTrackAndDelete(id));
  }

  deletePlaylist(id) {
    this.playlists.filter(playlis => playlist.getId(id) !== id);
  }

  deleteTrackInPlaylists(id) {
    this.playlists.forEach(playlist => playlist.deleteTrack(id));
  }

  updateArtist(id, artist) {
    const artistToUpdate = this.getArtistById(id)
    artistToUpdate.setName(artist.name);
    artistToUpdate.setCountry(artist.country);
    const artistIndex = this.artists.findIndex(a => a.getId() === id);
    this.artists.splice(artistIndex, 1,artistToUpdate);
    return artistToUpdate;
  }

  updateAlbumYear(id, year){
    var artistRecovered = this.getArtistByAlbumId(id);//this.artists.filter(artist => artist.id == artistId)[0].setAlbum(albumData.name, albumData.year);
    const album = artistRecovered.getAlbumById(id)
    album.setYear(year)
    artistRecovered.deleteAlbum(id)
    artistRecovered.setAlbum(album)
    const artistIndex = this.artists.findIndex(artist => artist.getId() === artistRecovered.getId())
    this.artists.splice(artistIndex, 1,artistRecovered);
    return album
  }

  removeArtist(artistId){
    const artistIndex = this.artists.findIndex(a => a.getId() === artistId);
    this.artists.splice(artistIndex, 1);
  }


  async popularAlbumsForArtist(artistName) {
    const artist = this.getArtistByName(artistName);
    const albumsFromSpotify = await InstanceOfSpotify.getAlbumsArtistByName(artistName)
    .then(albumsFromSpotify => 
      albumsFromSpotify.map(album => new Album(album.name, album.release_date.substr(0,4))),
    );
    albumsFromSpotify.forEach(album => this.addAlbum(artist.getId(), album));
    this.save();
    return albumsFromSpotify
  }

  async getLyrics(trackId){
    var artist = this.getArtistByTrackId(trackId)
    var track = this.getTrackById(trackId);
    if(track.getLyrics() == ''){
      var lyrics = await instanceOfMusixMatch.getTrackLyrics(track.name, artist.name)
      console.log(lyrics)
      track.setLyrics(lyrics)
      this.save()
      return lyrics
    } else { 
      return track.getLyrics();
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyAllObservers(object) {
    this.observers.forEach(observer => observer.notify(object));
  }

  notifyAllObserversAddAlbum(artist, album) {
    this.observers.forEach(observer => observer.notifyAddAlbum(artist, album));
  }

  getUnQify() {
    let unqify = new UnQify();
    if (fs.existsSync(SAVE_FILENAME)) {
      unqify = UnQify.load(SAVE_FILENAME);
    }
    return unqify;
  }

  save(){
    const serializedData = picklify.picklify(this);
    fs.writeFileSync(SAVE_FILENAME, JSON.stringify(serializedData, null, 2));
  }

  saveUNQfy(unqfy, filename = 'data.json') {
    unqfy.save(filename);
  }

  static load(filename) {
    const serializedData = fs.readFileSync(filename, {encoding: 'utf-8'});
    //COMPLETAR POR EL ALUMNO: Agregar a la lista todas las clases que necesitan ser instanciadas
    const classes = [UnQify, Artist, Album, Track, Playlist,Counter,NotifyObserver];
    return picklify.unpicklify(JSON.parse(serializedData), classes);
  }

}

// COMPLETAR POR EL ALUMNO: exportar todas las clases que necesiten ser utilizadas desde un modulo cliente
module.exports = {
  UnQify: UnQify,
};

