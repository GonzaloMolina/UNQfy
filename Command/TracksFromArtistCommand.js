

class TracksFromArtistCommand {
    invoke(unqfy, args) {
        console.log(unqfy.getTracksMatchingArtist(args[0]));
    }
}

module.exports = TracksFromArtistCommand