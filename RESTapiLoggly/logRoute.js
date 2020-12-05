const { Router } = require('express');
const router = Router();
const Activate = require('./activate');
const fs = require('fs'); 
const Log = require('../Clases/Log');
const log = new Log();

router.post('/', (req, res) => {
  log.saveEventLocal(req.body);
  log.saveEventLoggly(req.body);
  res.status(200);
  res.json(req.body);
});

router.get('/ping', (req, res) => {
  res.status(200).json();
});

module.exports = router;