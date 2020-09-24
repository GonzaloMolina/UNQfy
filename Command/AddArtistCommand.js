

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

module.exports = {AddArtistCommand, }