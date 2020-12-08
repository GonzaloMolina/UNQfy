const express = require('express');
const monitor = express();

monitor.get('/ping', (req, res) => {
  res.status(200).json("PONG");
});

monitor.get('/isAlive', (req, res) => {
    try{
        req.monitor.isAlive(res);
    } catch(e){
        console.log(e)
    }

})

;

monitor.post('/', (req, res) => {
  const body = req.body;
  req.monitor.disableMonitoringPeriodically(body.isActive);
  res.status(200).json();
})

module.exports = monitor;