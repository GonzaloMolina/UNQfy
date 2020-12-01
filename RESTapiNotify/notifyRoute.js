const express = require('express');
const notify = express();

notify.post('/notify', (req, res) => {
    let artistId = parseInt(req.body.artistId);
    try{ 
        let artist = req.unQify.getArtistById(artistId)
        let interestedUsers = artist.getSubscribers()
        //req.unQify.save();
        res.status(200).json(interestedUsers);
    }catch(e){
        if(e.name == 'ErrorInsufficientParameters'){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
        } else if(e.name =='ErrorDoesntExistsArtist'){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
        }
    }
});

module.exports = notify;