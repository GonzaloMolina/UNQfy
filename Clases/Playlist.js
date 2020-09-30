var counter = require('./Counter'); //Import Counter

class Playlist{
    constructor(name,genres,maxDuration){
        this.id = counter.getPlaylistId()
        this.name = name
        this.tracks = []
        this.genres = genres
        this.maxDuration = maxDuration
    }

    /**GETTERS */
    duration(){
        return this.maxDuration;
    }

    getTracks(){
        return this.tracks;
    }

    /**SETTERS */
    setTrackList(trackList) {
        this.tracks = trackList;
    }

    /**METHODS*/
    deleteTrack(id) {
        this.tracks = this.tracks.filter(track => track.getId() !== id);
    }

    hasTrack(trackToFind){
        var track = this.tracks.filter(theTrack => theTrack.id == trackToFind.id)[0]
        return trackToFind.id == track.id
    }
}

module.exports = Playlist