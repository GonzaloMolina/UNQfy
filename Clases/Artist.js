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

    getAlbums() {
        return this.albums;
    }
    
    getAlbumById(id) {
        return this.albums.find(album => album.getId() == id);
    }

    getAlbums() {
        return this.albums;
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
        albumToDelete = this.getAlbumById(id);
        albumToDelete.delete();
        this.albums.filter(album => album.getId() !== albumToDelete.getId());
    }

    searchTrackAndDelete(id) {
        this.albums.forEach(album => album.deleteTrack(id));
    }


}

module.exports = Artist