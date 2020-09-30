var counter = require('./Counter'); //Import Counter
const Album = require('./Album'); //Import Album

class Artist {
    constructor(name, country){
        this.id = counter.getArtistId();
        this.name = name;
        this.country = country;
        this.albums = [];
        
    }
    /**GETTERS */
    getId() {
        return this.id;
    }

    getName(){
        return this.name
    }

    getAlbums() {
        return this.albums
    }
    
    getAlbumById(id) {
        return this.albums.find(album => album.getId() == id);
    }

    getTrackById(id) {
        return this.albums.find(album => album.getTrackById(id));
    }

    getTracks() {
        return this.albums.flatMap(album => album.getTracks());
    }

    /**SETTERS */
    setAlbum(name, year){
        var album = new Album(name, year);
        this.albums.push(album);
        return album;
    }

    /**METHODS */
    delete() {
       this.albums.delete();
       this.albums = [];
    }

    deleteAlbum(id) {
        const albumToDelete = this.getAlbumById(id);
        albumToDelete.delete();
        this.albums = this.albums.filter(album => album.getId() !== id);
    }

    searchTrackAndDelete(id) {
        this.albums.forEach(album => album.deleteTrack(id));
    }

    existsAlbum(id){
        var album = this.albums.find(album => album.getId() == id);
        return this.albums.includes(album)
    }


}

module.exports = Artist