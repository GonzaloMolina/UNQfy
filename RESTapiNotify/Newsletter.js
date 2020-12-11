const GmailAPI = require('./GMailAPIClient');
const GmailAPIInstance = new GmailAPI();

class Newsletter {

  constructor() {
    this.subscribers = {};
  }

  subscribe(artistId, email) {
    artistId in this.subscribers ? this.addIfNotExist(email,artistId) : this.subscribers[artistId] = [email];
  }

  unsubscribe(artistId, email) {
    this.subscribers[artistId] = this.subscribers[artistId].filter(e => e != email);
  }

  addIfNotExist(email, artistId) {
    const list = this.subscribers[artistId];
    if (!list.includes(email)) {
      list.push(email);
    }
    this.subscribers[artistId] = list;
  }

  deleteSubscribers(artistId) {
    this.subscribers[artistId] = [];
  }

  notify(artistId, subject, message) {
    this.subscribers[artistId].forEach(email => {
        GmailAPIInstance.send_mail(subject,message,{email: email},{email: 'gonza.molinad@gmail.com'}).then( 
            (gmailResponse) => {
            console.log("Mail enviado!");
            console.log(gmailResponse);
          }).catch( (error) => {
            console.error("Algo salió mal");
            console.error(error);
    })})
  }

  getEmails(artistId) {
    return this.subscribers[artistId];
  }
}
module.exports = Newsletter;