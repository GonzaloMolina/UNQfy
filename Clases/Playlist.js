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

    /**SETTERS */
    setTrackList(TrackList) {
        this.tracks = TrackList;
    }
    /**METHODS*/
    deleteTrack(id) {
        this.tracks.filter(track => track.getId() !== id);
    }
}

module.exports = Playlist