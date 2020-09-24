
class DeletePlaylistCommand {
    invoke(args, unqfy) {
        const id = Number(args[0]);
        console.log(unqfy.deletePlaylist(id));
        console.log('The playslist was deleted correctly.');
    }
}

module.exports = DeletePlaylistCommand
