const url = 'https://discord.com/api/webhooks/783470266503528489/dO6OZdi9a6hTyUnje9JC1R2T4pNkDxgIz0Szb10_A380ckaiIFq15dUQNyj2hD6bQJ4d'
const rp = require('request-promise');

function getDateAndHour() {
    const date = new Date();
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const hora = date.getHours();
    const minutos = date.getMinutes();
    return `[${dia}/${mes} - ${hora}:${minutos}]`;
}

function basicMsg(serviceName, text) {
    return `${getDateAndHour()} El Servicio ${serviceName} ${text}`
}

function notifyServiceIsWorking(serviceName) {
    sendMessage({ content: basicMsg(serviceName, 'ha vuelvo a la normalidad') });
}

function notifyServiceIsNotWorking(serviceName) {
    sendMessage({ content: basicMsg(serviceName, 'ha dejado de funcionar') });
}

function sendMessage(msg) {
    rp.post({ headers: {'Content-type': 'application/json'}, url: url, body: JSON.stringify(msg)})
    .catch(error => {
        console.log(error);
    })     
}

module.exports = {
    notifyServiceIsNotWorking,
    notifyServiceIsWorking,
}