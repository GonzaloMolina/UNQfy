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

    getId(){
        return this.id;
    }

    getTracks(){
        return this.tracks;
    }

    /**SETTERS */
    setTrackList(trackList) { //tracklist 3 temas 1:3min , 2: 5min, 3: 4min, maxDuration 10
        var counter = 0;
        for(var i=0; i<trackList.length; i++){
            if(counter + trackList[i].getDuration() <= this.maxDuration){
                this.tracks.push(trackList[i])
                counter = counter + trackList[i].getDuration();
            }
        }
    }

    addTrack(track){
        this.tracks.push(track);
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