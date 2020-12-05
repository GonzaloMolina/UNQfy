const Activate = require('../RESTapiLoggly/activate');
const loggly = require('../RESTapiLoggly/loggly');

class Logging {

    constructor() {
        this.state = new Activate(this);
        this.events = [];
        loggly.addLoggly();
    }

    addEvent(event) {
        this.events.push(event);
    }
    
    saveEventLocal(event) {
        this.state.saveEventLocal(event);
    }

    saveEventLoggly(event) {
        this.state.saveEventLoggly(event);
    }

}

module.exports = Logging;
