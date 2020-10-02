const TracksToListCommand = require("./TracksToListCommand");


class TracksFromPlaylistCommand {
    invoke(unqfy, args) {
        const playlistId = Number(args[0]);
        console.log(unqfy.getTracksFromPlaylist(playlistId));
    }
}

module.exports = TracksFromPlaylistCommand  
