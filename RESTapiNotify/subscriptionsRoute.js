const express = require('express');
const subscriptions = express();
const rp = require('request-promise');

subscriptions.get('/subscriptions', (req, res) => {
    let artistId = parseInt(req.query.artistId);
    rp.get("http://localhost:5000/api/artists/" + artistId).then(response =>
        {let emails = req.newsletter.getEmails(artistId);
            response = {"artistId":artistId,
                        "subscriptors":[]
                    }
            for(let i=0; i< emails.length; i++){
                response.subscriptors.push(emails[i])
            }
            console.log(response)
        res.status(200).json(response);}).catch(e =>{
            console.log(e)
            res.json(e)
        })
            /*
        if(e.name == 'ErrorInsufficientParameters'){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
        } else if(e.statusCode == 404){
            res.status(404)
            res.json({status: 404, errorCode: 'RELATED_RESOURCE_NOT_FOUND'})
         
        })
         */  
});

module.exports = subscriptions;