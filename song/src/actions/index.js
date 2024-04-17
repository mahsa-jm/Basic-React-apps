// Action creator
export const selectSong = (song) => {
    // create an action
    return {
        // we HAVE to have a type
        type : 'SONG_SELECTED',
        payload : song

    };
};
