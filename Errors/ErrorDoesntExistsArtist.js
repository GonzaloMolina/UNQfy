
class ErrorDoesntExistsArtist extends Error {
    constructor() {
        super("Error artist doesnt exists");
        this.name = "ErrorDoesntExistsArtist";
    }
}

module.exports = ErrorDoesntExistsArtist
