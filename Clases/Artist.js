const Counter = require('./Counter'); //Import Counter
const Album = require('./Album'); //Import Album

class Artist {
    constructor(name, country){
        this.id = Counter.getArtistId();
        this.name = name;
        this.country = country;
        this.albums = [];
        
    }
    /**GETTERS */
    getId() {
        return this.id;
    }
    /**SETTERS */
    setAlbum(name, year){
        var album = new Album(name, year);
        this.albums.push(album);
        return album;
    }

    /**METHODS */

    getAlbumById(id) {
        return this.albums.find(album => album.getId() == id);
    }

}




module.exports = Artist