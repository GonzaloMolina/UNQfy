const rp = require('request-promise');

class NotifyObserver {

  notify(object) {}

  notifyAddAlbum(artist,album){
    var options = {
        method: 'POST',
        uri: 'http://localhost:5001/api/notify',
        body: {
          "artistId" : parseInt(artist.getId()),
          "subject": "Nuevo Album del artista: " + artist.getName(), 
          "message": "Se ha agregado el album " +  album.getName() + " al artista " + artist.getName()               
        },
        json: true // Automatically stringifies the body to JSON
    };
      rp(options).then(() => console.log('Se envio con exito a la api notification'))
      .catch(() => console.log('No se envio a la api notification'));
  }

  notifyAddArtist(artist) {
  }

  notifyDeleteAlbum(artist, album){

  }

  notifyDeleteArtist(artist){
    
  }

}

module.exports = NotifyObserver;