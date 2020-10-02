

class AddAlbumCommand {
    invoke(unqfy, args) {
        const artistId = Number(args[0]);
        const albumData = {
            name: args[1],
            year: Number(args[2]),
        };
        unqfy.addAlbum(artistId, albumData);
        console.log('The album was added correctly.');
    }
}

module.exports = AddAlbumCommand