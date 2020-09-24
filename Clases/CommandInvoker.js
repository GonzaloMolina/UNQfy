const {AddArtistCommand,
    AddAlbumCommand,
    AddTrackCommand,
    DeleteArtistCommand,
    DeleteAlbumCommand,
    DeleteTrackCommand,} = require('./Commands')

class CommandInvoker {
    constructor() {
        this.commands = {addArtist: new AddArtistCommand(),
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