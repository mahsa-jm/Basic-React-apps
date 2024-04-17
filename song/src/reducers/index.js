import { combineReducers } from "redux";

const songsReducers = () => {
    return [
        { title : 'No scrubs' , duration : '4:05'},
        { title : 'Smell like teen spirit' , duration : '5:00'},
        { title : 'Creep' , duration : '5:10'},
        { title : 'Wolf at the door' , duration : '4:30'}
    ];
};

const selectedSongReducer = ( selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs : songsReducers,
    selectedSong : selectedSongReducer
});