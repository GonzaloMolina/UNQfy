const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const port = process.env.PORT || 5001;
const newsletter= require('./Clases/Newsletter')
const subscribeRoute = require('./RESTapiNotify/subscribeRoute');
const unsubscribeRoute = require('./RESTapiNotify/unsubscribeRoute');
const notifyRoute = require('./RESTapiNotify/notifyRoute');

app.use((req, res, next) => {
    req.newsletter = new newsletter();
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
app.use('/api', subscribeRoute, unsubscribeRoute, notifyRoute);
app.use(invalidJson);

app.use((req,res) => {
     res.status(404);
     res.json({status: 404, errorCode: 'RESOURCE_NOT_FOUND'});
});

app.listen(port, () => console.log('Listening on ' + port));