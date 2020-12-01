const express = require('express');
const subscribe = express();
const rp = require('request-promise');

subscribe.post('/subscribe', (req, res) => {
    let artistId = parseInt(req.body.artistId);
    let email = req.body.email;
    rp.get("http://localhost:5000/api/artists/" + artistId).then(response =>
        {req.unQify.subscribe(email,artistId);
        req.unQify.save();
        res.status(200).json('Suscripción Exitosa');}
    ).catch(e =>{
        if(e.name == 'ErrorInsufficientParameters'){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
        } else if(e.statusCode == 404){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
        }
    })
});

module.exports = subscribe;