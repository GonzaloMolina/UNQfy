

class DeleteAlbumCommand {
    invoke(unqfy, args) {
        const idAlbum = Number(args[0]);
        console.log(unqfy.deleteAlbum(idAlbum));
        console.log('The album was deleted correctly.');
    }
}

module.exports = DeleteAlbumCommand
