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
    this.notify({ message: 'Se agrego el album ' + album.getName() + ' al artista ' + artist.getName(), levelMessage: 'info'});
  }

}

module.exports = NotifyLog;