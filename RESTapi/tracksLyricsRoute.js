const express = require('express');
const tracks = express();


tracks.get('/tracks/:trackId/lyrics', (req, res) => {

        try{
            const trackId = parseInt(req.params.trackId);
            const trackName = req.unQify.getTrackById(trackId).getName()
            req.unQify.getLyrics(trackId).then(response => {
                res.status(200).json({
                    Name: trackName,
                    Lyrics: response
                })
            })
        } catch(e){
            res.status(404)
            res.json({status: 404, errorCode: 'RESOURCE_NOT_FOUND'})
        }
});

module.exports = tracks;