const rp = require('request-promise');

class NotifyLog {

  notify(object) {
    const options = {
      method: 'POST',
      uri: 'http://localhost:5002/api/log',
      body: object,
      json: true 
    };

    rp(options)
      .then(() => console.log('Se envio con exito a la api log'))
      .catch(() => console.log('No se envio a la api log'));
  }

  notifyAddAlbum(artist, album) {
    this.notify({ message: 'Se agregó el album ' + album.getName() + ' al artista ' + artist.getName(), levelMessage: 'info'});
  }

  notifyAddArtist(artist) {
    this.notify({ message: 'Se agregó el artista ' + artist.getName(), levelMessage: 'info'});
  }

  notifyDeleteAlbum(artist, album){
    this.notify({ message: 'Se borró el album ' + album.getName() + ' del artista ' + artist.getName(), levelMessage: 'info'});
  }

  notifyDeleteArtist(artist){
    this.notify({ message: 'Se borró el artista ' + artist.getName(), levelMessage: 'info'});

  }
}

module.exports = NotifyLog;