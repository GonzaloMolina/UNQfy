const AddArtistCommand = require('./AddArtistCommand');
const AddAlbumCommand = require('./AddAlbumCommand');
const AddTrackCommand = require('./AddTrackCommand');
const AddTrackToPlaylistCommand = require('./AddTrackToPlaylistCommand');
const CreatePlaylistCommand = require('./CreatePlaylistCommand');
const DeleteArtistCommand = require('./DeleteArtistCommand');
const DeleteAlbumCommand = require('./DeleteAlbumCommand');
const DeleteTrackCommand = require('./DeleteTrackCommand');
const ArtistToListCommand = require('./ArtistsToListCommand');
const AlbumstToListCommand = require('./AlbumsToListCommand');
const TracksToListCommand = require('./TracksToListCommand');
 

class CommandInvoker {
    constructor() {
        this.commands = {
            addArtist: new AddArtistCommand(),
            addAlbum: new AddAlbumCommand(),
            addTrack: new AddTrackCommand(),
            addTrackToPlaylist: new AddTrackToPlaylistCommand(),
            createPlaylist: new CreatePlaylistCommand(),
            deleteTrack: new DeleteTrackCommand(),
            deleteAlbum: new DeleteAlbumCommand(),
            deleteArtist: new DeleteArtistCommand(),
            artistsToList: new ArtistToListCommand(),
            albumsToList: new AlbumstToListCommand(),
            tracksToList: new TracksToListCommand(),
        };
    }

    getCommand(key) {
        return this.commands[key];
    }
}

module.exports = CommandInvoker;