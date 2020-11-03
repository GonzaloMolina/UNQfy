
const express = require('express');
const artists = express();


artists.get('/artists/:artistId', (req, res) => {
    const artistId = parseInt(req.params.artistId);
    res.status(200).json(req.unQify.getArtistById(artistId));
});

artists.post('/artists', (req, res) => {
    const artist = req.unQify.addArtist(req.body);
    req.unQify.save();
    res.status(201).json(artist);
});


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
    console.log(req.unQify)
    res.status(200).json(req.unQify.getArtistsByName(req.query.name));
});

module.exports = artists;