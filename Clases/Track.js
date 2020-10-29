var counter = require('./Counter'); //Import Counter

class Track {
    constructor(name, duration, genres) {
        this.id;
        this.name = name;
        this.duration = duration;
        this.genres = genres;
    }

    /**GETTERS */
    getId() {
        return this.id;
    }

    getName(){
        return this.name;
    }

    getDuration(){
        return this.duration;
    }

    // SETTERS 
    setId(id){
        this.id = id;
    }

}

module.exports = Track;