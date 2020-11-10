class DeleteArtistCommand {
    invoke(unqfy, args) {
        const id = Number(args[0]);
        unqfy.deleteArtist(id);
        console.log('The artist was deleted correctly.');
    }
}

module.exports = DeleteArtistCommand