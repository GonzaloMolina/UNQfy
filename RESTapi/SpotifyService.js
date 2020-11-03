const unqmod = require('../unqfy');
const express = require('express');
const rootApp = express();
const artists = require('./artistsRoute')
const albums = require('./albumsRoute');
const bodyParse = require('body-parser');
const port = process.env.PORT || 5000;
const unQify = new unqmod.UnQify();

rootApp.use((req, res, next) => {
    req.unQify = unQify.getUnQify();
    next();
});

rootApp.use(bodyParse.urlencoded({ extended: true }));
rootApp.use(bodyParse.json());
rootApp.use('/api', artists, albums);


rootApp.listen(port, () => console.log('Listening on ' + port));