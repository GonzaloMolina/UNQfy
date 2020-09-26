
class CreatePlaylistCommand {
    invoke(args, unqfy) {
        const name = args[0];
        const maxDuration = Number(args[1]);
        const genres = args.slice(2, args.length);

        console.log(unqfy.createPlaylist(name, maxDuration, genres));
        console.log('The track was created correctly.');
    }
}

module.exports = CreatePlaylistCommand