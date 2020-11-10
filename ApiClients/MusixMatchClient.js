const rp = require('request-promise');


class MusixMatchClient {

    constructor() {
        this.apikey = 'c32c05f65b5a8f94e39e26f3c3240dbe'
        this.baseURL = 'http://api.musixmatch.com/ws/1.1'
    }


    async searchTrackId(trackName, artistName) {

        const options = {
            uri: this.baseURL + '/track.search',
            qs: {
                apikey: 'c32c05f65b5a8f94e39e26f3c3240dbe',
                q_track: trackName,
                q_artist: artistName,
            },
            json: true
        };

        console.log(options)

        try {
            const response = await rp.get(options).then(response => response);
            return response.message.body.track_list[0].track.track_id;
        } catch (error) {
            return console.log(error);
        }
    }

    async getTrackLyrics(trackName, artistName) {

        let trackId = await this.searchTrackId(trackName, artistName)
        
        
        const options = {
            uri: this.baseURL + '/track.lyrics.get',
            qs: {
                apikey: 'c32c05f65b5a8f94e39e26f3c3240dbe',
                track_id: '',
            },
            json: true
        }

        options.qs.track_id = trackId

        
        try {
            const response = await rp.get(options).then(response => {return response});
            console.log(response)
            const lyricsBody = response.message.body.lyrics.lyrics_body;
            return lyricsBody !== '' ? lyricsBody : 'No tiene Letra';
        } catch (error) {
            return console.log(error);
        }
    }
}


module.exports = {
    MusixMatchClient: MusixMatchClient,
};
