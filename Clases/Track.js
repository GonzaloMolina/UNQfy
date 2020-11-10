class Track {
    constructor(name, duration, genres) {
        this.id;
        this.name = name;
        this.duration = duration;
        this.genres = genres;
        this.lyrics = '';
    }

    /**GETTERS */
    getId() {
        return this.id;
    }

    getName(){
        return this.name;
    }

    getDuration(){
        return this.duration;
    }

    getLyrics(){
        return this.lyrics;
    }

    // SETTERS 
    setId(id){
        this.id = id;
    }

    setLyrics(lyrics){
        this.lyrics = lyrics;
    }

}

module.exports = Track;