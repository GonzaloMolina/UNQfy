

class AddTrackCommand {
    invoke(args, unqfy) {
        const trackData = {
            name: args[1],
            duration: Number(args[2]),
            genres: args.slice(3, args.length)
        };
        console.log(unqfy.addTrack(trackData));
        console.log('The track was added correctly.');
    }
}

module.exports = {AddTrackCommand, }