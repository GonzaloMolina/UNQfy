const express = require('express');
const subscriptions = express();
const rp = require('request-promise');

subscriptions.get('/subscriptions', (req, res) => {
    let artistId = parseInt(req.query.artistId);
    rp.get("http://localhost:5000/api/artists/" + artistId).then(response =>
        {
            let emails = req.newsletter.getEmails(artistId);
            response = {"artistId":artistId,
                        "subscriptors":[]
                    }
            for(let i=0; i< emails.length; i++){
                response.subscriptors.push(emails[i])
            }
            res.status(200).json(response)})
            .catch(e =>{
                if(e.name == 'ErrorInsufficientParameters'){
                    res.status(400)
                    res.json({status: 400, errorCode: 'BAD_REQUEST'})
                } else if(e.errorCode = "RESOURCE_NOT_FOUND"){
                    res.status(404)
                    res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
                }
        })
        
});

subscriptions.delete('/subscriptions', (req, res) => {
    let artistId = parseInt(req.body.artistId)
    rp.get("http://localhost:5000/api/artists/" + artistId).then(response => {
        req.newsletter.deleteSubscribers(artistId)
        res.status(200).json("Suscriptores borrados exitosamente")
    }).catch(e=>{
        if(e.name == 'ErrorInsufficientParameters'){
            res.status(400)
            res.json({status: 400, errorCode: 'BAD_REQUEST'})
        } else if(e.errorCode = "RESOURCE_NOT_FOUND"){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
        }
    })
})

module.exports = subscriptions;