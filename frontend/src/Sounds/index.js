
import Pizzicato from "pizzicato"
import swing from './player/swing/swing.wav'
import hit from './player/swing/hit.wav'
import hit1 from './player/swing/hit1.wav'
import oreHit from './player/swing/sword-unsheathe.wav'
import magic from './player/magic/spell.wav'
import homeScreenMusic from './music/homeMusic.mp3'



let playerSounds = {
    swing : new Pizzicato.Sound({ 
        source: 'file',
        options: { path: swing, volume: 0.4 }
    }, function() {
    }),

    hit : new Pizzicato.Sound({ 
        source: 'file',
        options: { path: hit }
    }, function() {
    }),

    hit1 : new Pizzicato.Sound({ 
        source: 'file',
        options: { path: hit1 }
    }, function() {
    }),

    oreHit : new Pizzicato.Sound({ 
        source: 'file',
        options: { path: oreHit, volume: 0.1}
    }, function() {
    }),

    magic : new Pizzicato.Sound({ 
        source: 'file',
        options: { path: magic, volume: 0.3}
    }, function() {
    }),
}



let music = { 
    homeScreen : new Pizzicato.Sound({ 
        source: 'file',
        options: { path: homeScreenMusic, volume: 0.1 }
        }, function() {

        }),

    mainScreen : new Pizzicato.Sound({ 
        source: 'file',
        options: { path: homeScreenMusic, volume: 0.1 }
        }, function() {

        }),
}

function soundCheck(sound, play) {
    if(play) {
        try {
            sound.play();
        } catch(err) {
            console.log("PlayBack Error");
        }
    }
}

function playSong(sound, play) {
    stopAll()
    soundCheck(sound, play);
}

function stopAll() {
    music.homeScreen.stop();
    music.mainScreen.stop()
}

export {
    soundCheck,
    playSong,
    stopAll,
    playerSounds,
    music,
}