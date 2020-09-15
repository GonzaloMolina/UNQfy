const Album = require('./Album'); //Import Album

class Artist {
    constructor(name, country){
        this.id = 1;//Math.floor(Math.random() * 101); //Return number between 0 and 100
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
        //this.albums.push(album);
        return album;
    }

    /**METHODS */

}




module.exports = Artist