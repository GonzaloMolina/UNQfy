const Counter = require('./Counter'); //Import Counter

class Album {
    constructor(name, year){
        this.id = Counter.getAlbumId;
        this.name = name;
        this.year = year;
        this.tracks = [];
    }

    /**GETTERS */
    getId(){
        return this.getId;
    }

    /**METHODS */
    delete(){
        this.tracks = [];
    }
}

module.exports = Album; //Export Album