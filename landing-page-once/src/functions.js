import songs from './data';

const getSongs = function () {
    return songs;
}

const getSong = function (name) {
    return songs.find(song => song.name === name)
}

export default {getSongs, getSong};