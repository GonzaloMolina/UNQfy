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
        return this.maxDuration
    }

    /**SETTERS */
    setTrackList(TrackList) {
        this.tracks = TrackList;
    }

    /**METHODS*/
    deleteTrack(id) {
        this.tracks.filter(track => track.getId() !== id);
    }

    hasTrack(trackToFind){
        var track = this.tracks.filter(theTrack => theTrack.id == trackToFind.id)[0]
        return trackToFind.id == track.id
    }
}

module.exports = Playlist