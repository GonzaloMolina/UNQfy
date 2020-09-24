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
        return this.albums.filter(album => album.getId() !== albumToDelete.getId());
    }

}

    getAlbumById(id) {
        return this.albums.find(album => album.getId() == id);
    }

    getAlbums(){
        return this.albums
    }

}

module.exports = Artist