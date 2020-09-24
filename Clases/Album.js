const Counter = require('./Counter'); //Import Counter
const Track = require('./Track').default; //Import Track

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
    setTrack(name, duration, genres) {
        const track = new Track(name, duration, genres);
        this.tracks.push(track);
        return track;
    }
}

module.exports = Album; //Export Album