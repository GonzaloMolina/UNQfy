
class SearchByNameCommand {
    invoke(unqfy, args) {
        const name = args[0];
        console.log(unqfy.searchByName(name));
    }
}

module.exports = SearchByNameCommand 