const AddArtistCommand = require('./AddArtistCommand');
const AddAlbumCommand = require('./AddAlbumCommand');
const AddTrackCommand = require('./AddTrackCommand');
const AddTrackToPlaylistCommand = require('./AddTrackToPlaylistCommand');
const CreatePlaylistCommand = require('./CreatePlaylistCommand');
const DeleteArtistCommand = require('./DeleteArtistCommand');
const DeleteAlbumCommand = require('./DeleteAlbumCommand');
const DeleteTrackCommand = require('./DeleteTrackCommand');
const ArtistToListCommand = require('./ArtistsToListCommand');
const AlbumstToListCommand = require('./AlbumsToListCommand');
const TracksToListCommand = require('./TracksToListCommand');
const TracksFromPlaylistCommand = require('./TacksFromPlaylistCommand');
const SearchByNameCommand = require('./SearchByNameCommand');
const TracksFromArtistCommand = require('./TracksFromArtistCommand');
const TracksOfGenreCommand = require('./TracksOfGenreCommand')


class CommandInvoker {
    constructor() {
        this.commands = {
            addArtist: new AddArtistCommand(),
            addAlbum: new AddAlbumCommand(),
            addTrack: new AddTrackCommand(),
            addTrackToPlaylist: new AddTrackToPlaylistCommand(),
            createPlaylist: new CreatePlaylistCommand(),
            deleteTrack: new DeleteTrackCommand(),
            deleteAlbum: new DeleteAlbumCommand(),
            deleteArtist: new DeleteArtistCommand(),
            artistsToList: new ArtistToListCommand(),
            albumsToList: new AlbumstToListCommand(),
            tracksToList: new TracksToListCommand(),
            tracksFromPlaylist: new TracksFromPlaylistCommand(),
            searchByName: new SearchByNameCommand(),
            tracksFromArtist: new TracksFromArtistCommand(),
            tracksOfGenre: new TracksOfGenreCommand(),
        };
    }

    getCommand(key) {
        return this.commands[key];
    }
}

module.exports = CommandInvoker;