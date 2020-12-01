const express = require('express');
const notify = express();
const GmailAPI = require('../GMailAPIClient')
const GmailAPIInstance = new GmailAPI();

notify.post('/notify', (req, res) => {
    let artistId = parseInt(req.body.artistId);
    try{ 
        let artist = req.unQify.getArtistById(artistId)
        let interestedUsers = artist.getSubscribers()
        interestedUsers.forEach(user => GmailAPIInstance.send_mail(
            req.body.subject,req.body.message,{email: user},{email: 'gonza.molinad@gmail.com'}
            )).then( (gmailResponse) => {
                console.log("Mail enviado!");
                console.log(gmailResponse);
              }).catch( (error) => {
                console.error("Algo salió mal");
                console.error(error);
              })
        req.unQify.save();
        console.log(res)
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