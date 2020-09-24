

class AddAlbumCommand {
    invoke(args, unqfy) {
        const albumData = {
            name: args[1],
            year: Number(args[2]),
        };
        console.log(unqfy.addAlbum(albumData));
        console.log('The album was added correctly.');
    }
}

module.exports = {AddAlbumCommand,}