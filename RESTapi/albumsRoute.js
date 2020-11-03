
const express = require('express');
const albums = express();

albums.post('/albums', (req, res) => {
    const album = { name: req.body.params.name, year: req.body.params.year };
    const newAlbum = req.unQify.addAlbum(req.body.params.artistId, album);
    req.unQify.save();
    res.status(201).json(newAlbum);
});

albums.get('/albums/:albumId', (req, res) => {
    const albumId = parseInt(req.params.albumId);
    const album = req.unQify.getAlbumById(albumId);
    res.status(200).json(album);
});

albums.put('/albums/:albumId', (req, res) => {
    const albumId = parseInt(req.params.albumId);
    const album = req.unQify.getAlbumById(albumId);
    album.year = req.body.year;
    req.unQify.updateAlbumYear(albumId,album);
    req.unQify.save();
    res.status(200).json(album);
});

albums.delete('/albums/:albumId', (req, res) => {
    const albumId = parseInt(req.params.albumId);
    req.unQify.deleteAlbum(albumId);
    req.unQify.save();
    res.status(204).json({ message: `delete album:${albumId}` });
});

albums.get('/albums', (req, res) => {
    const albums = req.unQify.getAlbumsByName(req.query.name);
    res.status(200).json(albums);
});

module.exports = albums;