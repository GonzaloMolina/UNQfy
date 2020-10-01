

class AddTrackToPlaylistCommand {
    invoke(args, unqfy) {
        const trackId = Number([0]);
        const playlistId = Number([1]);
        console.log(unqfy.addTrackToPlaylist(trackId, playlistId));
        console.log('The track was added correctly in the playlist.');
    }
}

module.exports = AddTrackToPlaylistCommand