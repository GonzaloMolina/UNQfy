var counter = require('./Counter'); //Import Counter
const Track = require('./Track'); //Import Track

class Album {
    constructor(name, year){
        this.id = counter.getAlbumId();
        this.name = name;
        this.year = year;
        this.tracks = [];
    }

    /**GETTERS */
    getId(){
        return this.id;
    }

    /**METHODS */
    setTrack(name, duration, genres) {
        const track = new Track(name, duration, genres);
        this.tracks.push(track);
        return track;
    }

    /**METHODS */
    delete(){
        this.tracks = [];
    }

    deleteTrack(id){
        this.tracks.filter(track => track.getId() !== id);
    }
}

module.exports = Album; //Export Album