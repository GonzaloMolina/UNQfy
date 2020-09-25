
class ErrorDoesntExistsAlbum extends Error {
    constructor() {
        super("Error album doesnt exists");
        this.name = "ErrorDoesntExistsAlbum";
    }
}

module.exports = ErrorDoesntExistsAlbum
