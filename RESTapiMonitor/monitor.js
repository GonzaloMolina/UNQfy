const rp = require('request-promise');
const Monitor = require('../Clases/Monitor');
let preiodically = true;
const services = [
    { port: 5000, ip:'localhost', name: 'UNQfy', status: false},
    { port: 5001, ip:'localhost', name: 'Notification', status: false},
    { port: 5002, ip:'localhost', name: 'Logging', status: false}
]

function isAlive(res) {
  Promise.all(services.map((service) => checkService(service)))
  .then((servicesStatus) => res.status(200).json(servicesStatus));
}

function checkService(service) {
   return isAliveP(service.port, service.ip)
      .then(() => {
        if (!service.status) {
            Monitor.notifyServiceIsWorking(service.name)
          service.status = true
        }
        return true;
      })
      .catch(() => {
        Monitor.notifyServiceIsNotWorking(service.name)
        return false;
      })
      .then((isOnline) => {
        return {
          service: service.name,
          status: (isOnline ? 'Enabled' : 'Disabled')
      };
    });
}

function isAliveP(port, ip) {
  return rp.get(`http://${ip}:${port}/api/ping`);
}

function disableMonitoringPeriodically(bool) {
  preiodically = bool;
}

function intervalFunc() {
  if(preiodically) {
    services.map((service) => checkService(service));
  }
}

setInterval(intervalFunc, 15000);

module.exports = {
  isAlive,
  disableMonitoringPeriodically,
}