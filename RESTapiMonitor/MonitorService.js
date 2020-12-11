const express = require('express');
const app = express();
const monitorRoute = require('./monitorRoute');
const monitor = require('./monitor')
const port = process.env.PORT || 5003;

app.use((req, res, next) => {
    req.monitor = monitor;
    next();
});

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

// routes 
app.use('/api',monitorRoute);

function invalidJson(err, req, res, next) {
    if (err) {
        res.status(400);
        res.json({ status: 400, errorCode: "BAD_REQUEST" });
    }
}

app.use(invalidJson);

// starting the server

app.listen(port, () => console.log('Listening on ' + port));