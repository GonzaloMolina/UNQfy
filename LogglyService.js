const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const port = process.env.PORT || 5002;
const logging = require('./Clases/Log');
const loggingInstance = new logging();
const logRoute = require('./RESTapiLoggly/logRoute')

app.use((req, res, next) => {
    req.logging = loggingInstance;
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
app.use('/api', logRoute);
app.use(invalidJson);

app.get('/api/ping', (req, res) => {
    res.status(200).json("PONG");
});

app.listen(port, () => console.log('Listening on ' + port));