

class AddTrackCommand {
    invoke(args, unqfy) {
        const albumId = Number(args[0]);
        const trackData = {
            name: args[1],
            duration: Number(args[2]),
            genres: args.slice(3, args.length)
        };
        console.log(unqfy.addTrack(albumId, trackData));
        console.log('The track was added correctly.');
    }
}

module.exports = AddTrackCommand