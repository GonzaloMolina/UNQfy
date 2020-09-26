class AddArtistCommand {
    
    invoke(args, unqfy) {
        const artistData = {
            name: args[1],
            country: args[3],
        };

        console.log(unqfy.addArtist(artistData));
        console.log('The artist was added correctly.');
    }
}

module.exports = AddArtistCommand