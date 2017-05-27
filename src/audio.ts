import { EventEmitter } from 'events';
import * as THREE from 'three';

interface IAudioOption {
  fftsize?: number
}

export class Audio extends EventEmitter {
  public listener: THREE.AudioListener;
  private sound: THREE.Audio;
  private audioLoader: THREE.AudioLoader;
  private analyser: THREE.AudioAnalyser;
  public readonly frequencyBinCount: number;
  constructor(option: IAudioOption = {}) {
    super()
    this.listener = new THREE.AudioListener();
    this.sound = new THREE.Audio(this.listener);
    this.audioLoader = new THREE.AudioLoader();
    this.analyser = new THREE.AudioAnalyser(this.sound, option.fftsize || 256);
    this.Volume = 0.5;
    this.frequencyBinCount = this.analyser.analyser.frequencyBinCount;
  }
  load(src: string) {
    this.audioLoader.load(src, (buffer: any) => {
      this.sound.setBuffer(buffer);
      this.sound.setLoop(true);
      this.sound.play();
    }, undefined, undefined);
  }
  set Volume(volume:number){
    this.sound.setVolume(volume);
  }
  getFrequencyData() {
    return this.analyser.getFrequencyData()
  }
}