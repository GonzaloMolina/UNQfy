const express = require('express');
const unsubscribe = express();

unsubscribe.post('/unsubscribe', (req, res) => {
    let artistId = parseInt(req.body.artistId);
    let email = req.body.email;
    try{        
        req.unQify.unsubscribe(email,artistId);
        req.unQify.save();
        res.status(200).json('Desuscripción Exitosa');
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

module.exports = unsubscribe;