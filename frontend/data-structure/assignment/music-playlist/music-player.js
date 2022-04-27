const Song = require('./song')
const Playlist = require('./playlist')

module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    addSong(song) {
        // TODO: answer here
        this.playlist.songs.push(song);
    }

    play() {
        // TODO: answer here
        let output = "";
        if(this.playlist.songs.length === 0) {
            return output;
        }
        if(this.playlist.isRepeatable === true) {
            output = `Now Playing ${this.playlist.songs[0].singer} - ${this.playlist.songs[0].title}`;
            this.playlist.songs.push(this.playlist.songs.shift());
        } else{
            output = `Now Playing ${this.playlist.songs[0].singer} - ${this.playlist.songs[0].title}`;
            this.playlist.songs.shift();
        }
        return output;
    }
}

const MusicPlayer = require('./music-player')

let playlist = new Playlist([], false)
let player = new MusicPlayer(playlist)
player.addSong(new Song("Tulus", "Hati-Hati di Jalan"))
player.addSong(new Song("TREASURE", "DARARI"))
player.addSong(new Song("NIKI", "Every Summertime"))
player.addSong(new Song("Pamungkas", "To The Bone"))
player.playlist.repeat()
player.play()
console.log(player)
console.log(player.playlist.songs)
console.log(player.play())