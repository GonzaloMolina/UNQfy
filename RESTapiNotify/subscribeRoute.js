const express = require('express');
const subscribe = express();

subscribe.post('/subscribe', (req, res) => {
    let artistId = parseInt(req.body.artistId);
    let email = req.body.email;
    try{        
        req.unQify.subscribe(email,artistId);
        req.unQify.save();
        res.status(200).json('Suscripto Exitosamente');
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

module.exports = subscribe;