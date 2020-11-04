class Playlist{
    constructor(name,genres,maxDuration){
        this.id;
        this.name = name
        this.tracks = []
        this.genres = genres
        this.maxDuration = maxDuration
    }

    /**GETTERS */

    getId(){
        return this.id;
    }

    getTracks(){
        return this.tracks;
    }

    duration(){
        return this.maxDuration;
    }

    /**SETTERS */

    setId(id){
        this.id = id;
    }

    setTrackList(trackList) {
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