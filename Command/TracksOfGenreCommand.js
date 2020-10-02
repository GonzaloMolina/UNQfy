class TracksOfGenreCommand {
    invoke(unqfy, args) {
        console.log(unqfy.getTracksMatchingGenres(args.slice(0, args.length)));
    }
}

module.exports = TracksOfGenreCommand