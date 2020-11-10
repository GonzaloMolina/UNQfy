class GetLyricsCommand {
    async invoke(unqfy, args) {
        const trackId = Number(args[0]);
        var lyrics = await unqfy.getLyrics(trackId)
        console.log(lyrics)
    }
}

module.exports = GetLyricsCommand