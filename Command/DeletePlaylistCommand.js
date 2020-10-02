
class DeletePlaylistCommand {
    invoke(unqfy, args) {
        const id = Number(args[0]);
        console.log(unqfy.deletePlaylist(id));
        console.log('The playslist was deleted correctly.');
    }
}

module.exports = DeletePlaylistCommand
