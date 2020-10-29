class Counter {
    constructor() {
        this.idArtists = 0;
        this.idAlbums = 0;
        this.idTracks = 0;
        this.idPlaylists = 0;
    }

    /**METHODS */
    getArtistId() {
        var artistId = this.idArtists;
        this.idArtists ++; 
        return artistId; 
    }

    getAlbumId() {
        var albumId = this.idAlbums;
        this.idAlbums ++; 
        return albumId; 
    }

    getTrackId() {
        var trackId = this.idTracks;
        this.idTracks ++; 
        return trackId; 
    }

    getPlaylistId(){
        var playlistId = this.idPlaylists;
        this.idPlaylists ++
        return playlistId
    }
    
}

module.exports = Counter
