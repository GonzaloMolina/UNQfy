
const express = require('express');
const albums = express();


albums.post('/albums', (req, res) => {
    let artistId = parseInt(req.body.artistId)
    try{        
        const album = { name: req.body.name, year: req.body.year };
        const newAlbum = req.unQify.addAlbum(artistId, album);
        req.unQify.save();
        res.status(201).json(newAlbum);
    }catch(e){
        if(e.name == 'ErrorInsufficientParameters'){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
        } else if(e.name =='ErrorDoesntExistsArtist'){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
        }else {
            res.status(409)
            res.json({status: 409, errorCode: 'RESOURCE_ALREADY_EXISTS'})
        }
    }
});

albums.get('/albums/:albumId', (req, res) => {

    const albumId = parseInt(req.params.albumId);
    const checkAlbum = req.unQify.getAlbumById(albumId);
    if(!checkAlbum) {
        res.status(404)
        res.json({status: 404, errorCode: 'RESOURCE_NOT_FOUND'})
    } else{
        const albumId = parseInt(req.params.albumId);
        const album = req.unQify.getAlbumById(albumId);
        res.status(200).json(album);
    }
});

albums.patch('/albums/:albumId', (req, res) => {
    const albumId = parseInt(req.params.albumId);
    const album = req.unQify.getAlbumById(albumId)
    req.unQify.updateAlbumYear(albumId,req.body.year);
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