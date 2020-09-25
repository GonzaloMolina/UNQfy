
class ErrorRepeatAlbum extends Error {
    constructor() {
        super("Error album already exists");
        this.name = "ErrorRepeatAlbum";
    }
}

module.exports = ErrorRepeatAlbum
