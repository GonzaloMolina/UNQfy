const express = require('express');
const notify = express();
const GmailAPI = require('../GMailAPIClient')
const GmailAPIInstance = new GmailAPI();
const rp = require('request-promise');

notify.post('/notify', (req, res) => {
    let artistId = parseInt(req.body.artistId);
        rp.get("http://localhost:5000/api/artists/" + artistId).then(response =>
        {
            req.newsletter.notify(artistId,req.body.subject,req.body.message)
        }).catch(e =>{
        if(e.name == 'ErrorInsufficientParameters'){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
        } else if(e.statusCode == 404){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
        }
    })
});

module.exports = notify