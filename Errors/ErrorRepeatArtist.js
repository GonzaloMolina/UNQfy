
class ErrorReapeatArtist extends Error {
    constructor() {
        super("Error artist already exists");
        this.name = "ErrorReapeatArtist";
    }
}

module.exports = ErrorReapeatArtist
