
class ErrorDoesntExistsTrack extends Error {
    constructor() {
        super("Error track doesnt exists");
        this.name = "ErrorDoesntExistsTrack";
    }
}

module.exports = ErrorDoesntExistsTrack
