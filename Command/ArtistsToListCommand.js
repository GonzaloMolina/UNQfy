

class ArtistToListCommand {
    invoke(args, unqfy) {
        console.log(unqfy.getAllArtists());
    }
}

module.exports = ArtistToListCommand