var counter = require('./Counter'); //Import Counter

class Track {
    constructor(name, duration, genres) {
        this.id = counter.getTrackId();
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

}

module.exports = Track;