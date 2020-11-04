class PopularAlbumsFromArtistCommand {
    invoke(unqfy, args) {
        const artistName = Number(args[0]);
        unqfy.popularAlbumsForArtist(artistName)
        console.log(albums);
    }
}

module.exports = PopularAlbumsFromArtistCommand