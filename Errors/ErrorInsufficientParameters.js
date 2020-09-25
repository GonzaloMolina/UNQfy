
class ErrorInsufficientParameters extends Error {
    constructor() {
        super("Error insufficient parameters");
        this.name = "ErrorInsufficientParameters";
    }
}

module.exports = ErrorInsufficientParameters
