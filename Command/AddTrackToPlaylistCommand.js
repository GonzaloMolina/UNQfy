

class AddTrackToPlaylistCommand {
    invoke(unqfy, args) {
        const trackId = Number(args[0]);
        const playlistId = Number(args[1]);
        unqfy.addTrackToPlaylist(trackId, playlistId);
        console.log('The track was added correctly in the playlist.');
    }
}

module.exports = AddTrackToPlaylistCommand