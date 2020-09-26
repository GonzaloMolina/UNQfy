

class AddAlbumCommand {
    invoke(args, unqfy) {
        const artistId = Number(arg[0]);
        const albumData = {
            name: args[1],
            year: Number(args[2]),
        };
        console.log(unqfy.addAlbum(artistId, albumData));
        console.log('The album was added correctly.');
    }
}

module.exports = AddAlbumCommand