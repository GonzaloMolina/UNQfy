

class TracksToListCommand {
    invoke(args, unqfy) {
        console.log(unqfy.getAllTracks());
    }
}

module.exports = TracksToListCommand
