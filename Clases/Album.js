const Track = require('./Track'); //Import Track

class Album {
    constructor(name, year){
        this.id;
        this.name = name;
        this.tracks = [];
        this.year = year;
    }

    /**GETTERS */
    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getTracks() {
        return this.tracks;
    }

    existsTrack(trackId){
        var track = this.tracks.find(track => track.id == trackId)
        return this.tracks.includes(track)
    }

    /**SETTERS */
    setId(id){
        this.id = id;
    }

    setTrack(track) {
        this.tracks.push(track);
        return track;
    }

    setYear(year){
        this.year = year
    }

    /**METHODS */
    delete(){
        this.tracks = [];
    }

    deleteTrack(id){
        this.tracks = this.tracks.filter(track => track.id !== id);
    }

}

module.exports = Album; //Export Album