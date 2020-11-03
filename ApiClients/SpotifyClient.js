const fs = require('fs'); // para cargar/guarfar unqfy
const rp = require('request-promise');
const BASE_URL = 'https://api.spotify.com/v1/';
const cred = require('../spotifyCreds.json');

class SpotifyClient {
    constructor() {
        this.options = this.reqOptions();
    }

    reqOptions() {
        const creds = cred.access_token
        const options = {
            url: null, 
            headers: { Authorization: 'Bearer ' + creds }, 
            json: true
        };
        return options;
    }

    async getAlbumsArtistByName(artistName) {
        const artist = await this.searchArtistByName(artistName);
        const albums = await this.getAlbumsByArtistId(artist.id);
        return albums;
    }

    async searchArtistByName(artistName) {
        this.options.url = BASE_URL + `search?query=${artistName}&type=artist&offset=0&limit=1`;
        return rp.get(this.options).then(response => response.artists.items.shift());
    }

    async getAlbumsByArtistId(artistId) {
        this.options.url = BASE_URL + `artists/${artistId}/albums`;
        return rp.get(this.options).then(response => response.items);
    }
}

module.exports = {
    SpotifyClient: SpotifyClient,
};