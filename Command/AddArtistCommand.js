class AddArtistCommand {
    
    invoke(unqfy, args) {
        const artistData = {
            name: args[0],
            country: args[1],
        };

        unqfy.addArtist(artistData);
        console.log('The artist was added correctly.');
    }
}

module.exports = AddArtistCommand