const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const port = process.env.PORT || 5001;
const newsletter= require('./Clases/Newsletter')
const newsletterInstance= new newsletter();
const subscribeRoute = require('./RESTapiNotify/subscribeRoute');
const unsubscribeRoute = require('./RESTapiNotify/unsubscribeRoute');
const notifyRoute = require('./RESTapiNotify/notifyRoute');
const subscriptionsRoute = require('./RESTapiNotify/subscriptionsRoute');

app.use((req, res, next) => {
    req.newsletter = newsletterInstance;
    next();
});

function invalidJson(err, req, res, next) {
    if (err) {
        res.status(400);
        res.json({ status: 400, errorCode: "BAD_REQUEST" });
    }
}

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use('/api', subscribeRoute, unsubscribeRoute, notifyRoute, subscriptionsRoute);
app.use(invalidJson);

app.get('/api/ping', (req, res) => {
    res.status(200).json("PONG");
});

app.listen(port, () => console.log('Listening on ' + port));