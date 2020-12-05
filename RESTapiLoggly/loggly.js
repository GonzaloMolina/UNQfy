var winston  = require('winston');
var {Loggly} = require('winston-loggly-bulk');

function addLoggly() {
winston.add(new Loggly({
    token: "439e990c-8edb-4bfd-a00f-32fb6af39209",
    subdomain: "ldicarlo",
    tags: ["Winston-NodeJS"],
    json: true
}));
}

function addEvent(event) {
    winston.log(event.levelMessage, event.message);
}

module.exports = {
    addLoggly,
    addEvent
};