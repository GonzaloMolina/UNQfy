
class ErrorRepeatTrack extends Error {
    constructor() {
        super("Error track already exists");
        this.name = "ErrorRepeatTrack";
    }
}

module.exports = ErrorRepeatTrack
