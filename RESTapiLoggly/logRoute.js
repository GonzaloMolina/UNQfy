const express = require('express');
const log = express();
const Activate = require('./activate'); 

log.post('/log', (req, res) => {
  req.logging.saveEventLocal(req.body);
  req.logging.saveEventLoggly(req.body);
  res.status(200);
  res.json(req.body);
});

log.get('/ping', (req, res) => {
  res.status(200).json('PONG');
});

module.exports = log;