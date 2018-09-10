import { EventEmitter } from 'events';
import * as THREE from 'three';

export interface IAudioOption {
  fftsize?: number
}
export interface loadOption {
  src: string,
  onLoad?: (buffer: THREE.AudioBuffer) => void
  onPrgress?: (xhr: ProgressEvent) => void
  onError?: () => void
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
    this.frequencyBinCount = this.analyser.analyser.frequencyBinCount;
  }
  public load (
    option: loadOption
  ) {
    const {
      src,
      onLoad = (buffer: THREE.AudioBuffer) => void(0),
      onPrgress = (xhr: ProgressEvent) => void(0),
      onError = () => void(0)
    } = option
    this.audioLoader.load(src, (buffer: THREE.AudioBuffer) => {
      this.sound.setBuffer(buffer);
      this.sound.setLoop(true);
      this.sound.play();
      return onLoad(buffer);
    }, onPrgress, onError);
  }
  public setVolume (volume:number) {
    this.sound.setVolume(volume);
  }
  public getFrequencyData () {
    return this.analyser.getFrequencyData()
  }
}
