const Counter = require('./Counter'); //Import Counter

class Album {
    constructor(name, year){
        this.id = Counter.getAlbumId;
        this.name = name;
        this.year = year;
    }

    /**GETTERS */
    getId(){
        return this.getId;
    }
}

module.exports = Album; //Export Album