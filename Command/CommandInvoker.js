
const {AddArtistCommand} = require('./AddArtistCommand');
const {AddAlbumCommand} = require('./AddAlbumCommand');
const {AddTrackCommand} = require('./AddTrackCommand');
const {CreatePlaylistCommand} = require('./CreatePlaylistCommand');
const {DeleteArtistCommand} = require('./DeleteArtistCommand');
const {DeleteAlbumCommand} = require('./DeleteAlbumCommand');
const {DeleteTrackCommand} = require('./DeleteTrackCommand');

class CommandInvoker {
    constructor() {
        this.commands = {
            addArtist: new AddArtistCommand(),
            addAlbum: new AddAlbumCommand(),
            addTrack: new AddTrackCommand(),
            createPlaylist: new CreatePlaylistCommand(),
            deleteTrack: new DeleteTrackCommand(),
            deleteAlbum: new DeleteAlbumCommand(),
            deleteArtist: new DeleteArtistCommand(),
        };
    }


    getCommand(key) {
        return this.commands[key];
    }
}

module.exports = CommandInvoker;