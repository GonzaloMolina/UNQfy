class PopularAlbumsFromArtistCommand {
    async invoke(unqfy, args) {
        const artistName = String(args[0]);
        await unqfy.popularAlbumsForArtist(artistName)
    }
}

module.exports = PopularAlbumsFromArtistCommand