"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const THREE = require("three");
class Audio extends events_1.EventEmitter {
    constructor(option = {}) {
        super();
        this.listener = new THREE.AudioListener();
        this.sound = new THREE.Audio(this.listener);
        this.audioLoader = new THREE.AudioLoader();
        this.analyser = new THREE.AudioAnalyser(this.sound, option.fftsize || 256);
        this.Volume = 0.5;
        this.frequencyBinCount = this.analyser.analyser.frequencyBinCount;
    }
    load(src, onLoad, onPrgress, onError) {
        this.audioLoader.load(src, (buffer) => {
            this.sound.setBuffer(buffer);
            this.sound.setLoop(true);
            this.sound.play();
            return onLoad(buffer);
        }, onPrgress, onError);
    }
    set Volume(volume) {
        this.sound.setVolume(volume);
    }
    getFrequencyData() {
        return this.analyser.getFrequencyData();
    }
}
exports.Audio = Audio;
//# sourceMappingURL=audio.js.map