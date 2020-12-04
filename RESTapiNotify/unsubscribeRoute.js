const express = require('express');
const unsubscribe = express();
const rp = require('request-promise');

unsubscribe.post('/unsubscribe', (req, res) => {
    let artistId = parseInt(req.body.artistId);
    let email = req.body.email;
    rp.get("http://localhost:5000/api/artists/" + artistId).then(response =>
        {   console.log(req.newsletter)
            req.newsletter.unsubscribe(artistId,email);
            console.log(req.newsletter.getEmails(artistId))
        res.status(200).json('Desuscripción Exitosa');}
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

module.exports = unsubscribe;