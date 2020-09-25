

class DeleteArtistCommand {
    invoke(args, unqfy) {
        const id = Number(args[0]);
        console.log(unqfy.deleteArtist(id));
        console.log('The artist was deleted correctly.');
    }
}

module.exports = DeleteArtistCommand