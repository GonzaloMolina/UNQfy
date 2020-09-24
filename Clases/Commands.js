
/**ADD COMMANDS */
class AddArtistCommand {
    invoke(args, unqfy) {
        const artistData = {
            name: args[0],
            country: args[1],
        };
        console.log(unqfy.addArtist(artistData));
        console.log('The artist was added correctly.');
    }
}

class AddAlbumCommand {
    invoke(args, unqfy) {
        const albumData = {
            name: args[1],
            year: Number(args[2]),
        }
        console.log(unqfy.addAlbum(albumData));
        console.log('The album was added correctly.')
    }
}

class AddTrackCommand {
    invoke(args, unqfy) {
        const trackData = {
            name: args[1],
            duration: Number(args[2]),
            genres: args.slice(3, args.length)
        };
        console.log(unqfy.addTrack(trackData));
        console.log('The track was added correctly.');
    }
}

class CreatePlaylistCommand {
    invoke(args, unqfy) {

        const name = args[0];
        const maxDuration = Number(args[1]);
        const genres = args.slice(2, args.length);

        console.log(unqfy.createPlaylist(name, maxDuration, genres));
        console.log('The track was created correctly.');
    }
}

/**DELETE COMMANDS */

class DeleteArtistCommand {
    invoke(args, unqfy) {
        const idArtist = Number(args[0]);
        console.log(unqfy.deleteArtist(idArtist));
        console.log('The artist was deleted correctly.');
    }
}

class DeleteAlbumCommand {
    invoke(args, unqfy) {
        const idAlbum = Number(args[0]);
        console.log(unqfy.deleteAlbum(idAlbum));
        console.log('The album was deleted correctly.');
    }
}

class DeleteTrackCommand {
    invoke(args, unqfy) {
        const idTrack = Number(args[0]);
        console.log(unqfy.deleteTrack(idTrack));
        console.log('The track was deleted correctly.');
    }
}

module.exports = {AddArtistCommand,
    AddAlbumCommand,
    AddTrackCommand,
    DeleteArtistCommand,
    DeleteAlbumCommand,
    DeleteTrackCommand,
}