class DeleteTrackCommand {
    invoke(args, unqfy) {
        const idTrack = Number(args[0]);
        console.log(unqfy.deleteTrack(idTrack));
        console.log('The track was deleted correctly.');
    }
}

module.exports = DeleteTrackCommand