var counter = require('./Counter'); //Import Counter

class Track {
    constructor(name, duration, genres) {
        this.id = counter.getTrackId();
        this.name = name;
        this.duration = duration;
        this.genres = genres;
    }

}

module.exports = Track;