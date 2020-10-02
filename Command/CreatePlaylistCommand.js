
class CreatePlaylistCommand {
    invoke(unqfy, args) {
        const name = args[0];
        const maxDuration = Number(args[1]);
        const genres = args.slice(2, args.length);
        unqfy.createPlaylist(name, genres, maxDuration);
        console.log('The playlist was created correctly.');
    }
}

module.exports = CreatePlaylistCommand