

class DeleteArtistCommand {
    invoke(args, unqfy) {
        const idArtist = Number(args[0]);
        console.log(unqfy.deleteArtist(idArtist));
        console.log('The artist was deleted correctly.');
    }
}

module.exports = DeleteArtistCommand