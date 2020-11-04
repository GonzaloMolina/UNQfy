const unqmod = require('../unqfy');
const express = require('express');
const app = express();
const artists = require('./artistsRoute')
const albums = require('./albumsRoute');
const bodyParse = require('body-parser');
const port = process.env.PORT || 5000;
const unQify = new unqmod.UnQify();

app.use((req, res, next) => {
    req.unQify = unQify.getUnQify();
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
app.use('/api', artists, albums);
app.use(invalidJson);

app.use((req,res) => {
     res.status(404);
     res.json({status: 404, errorCode: 'RESOURCE_NOT_FOUND'});
});

app.listen(port, () => console.log('Listening on ' + port));