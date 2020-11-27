const express = require('express');
const artists = express()


artists.get('/artists/:artistId', (req, res) => {
    const artistId = parseInt(req.params.artistId);
    const checkArtist = req.unQify.getArtistById(artistId);
    if(!checkArtist) {
        res.status(404)
        res.json({status: 404, errorCode: 'RESOURCE_NOT_FOUND'})
    } else{
        res.status(200).json(checkArtist);
    }
});

artists.post('/artists', (req, res) => {
    console.log(JSON.stringify(req.body))
    try{
            const artist = req.unQify.addArtist(req.body);
            req.unQify.save();
            res.status(201).json(artist);
        }catch(e){
        if(e.name == 'ErrorReapeatArtist'){
            res.status(409)
            res.json({status: 409, errorCode: 'RESOURCE_ALREADY_EXISTS'})
        }
    }

});

function isValidJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

artists.put('/artists/:artistId', (req, res) => {
    const artistId = parseInt(req.params.artistId);
    console.log(artistId)
    const artist = req.unQify.updateArtist(artistId, req.body);
    req.unQify.save();
    res.status(200).json(artist);
});


artists.delete('/artists/:artistId', (req, res) => {
    const artistId = parseInt(req.params.artistId);
    req.unQify.removeArtist(artistId);
    req.unQify.save();
    res.status(204).json({ message: `delete artist:${artistId}` });
});


artists.get('/artists', (req, res) => {
    res.status(200).json(req.unQify.getArtistsByName(req.query.name));
});

module.exports = artists;