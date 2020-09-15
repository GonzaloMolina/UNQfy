const Counter = require('./Counter'); //Import Counter

class Track {
    constructor(name, duration, genres) {
        this.id = Counter.getTrackId;
        this.name = name;
        this.duration = duration;
        this.genres = genres;
    }
    
}