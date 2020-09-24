var counter = require('./Counter'); //Import Counter

class Playlist{
    constructor(name,genres,maxDuration){
        this.id = counter.getPlaylistId()
        this.name = name
        this.tracks = []
        this.genres = genres
        this.maxDuration = maxDuration
    }
}

module.exports = Playlist