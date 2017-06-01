/// <reference types="node" />
import { EventEmitter } from 'events';
import * as THREE from 'three';
export interface IAudioOption {
    fftsize?: number;
}
export declare class Audio extends EventEmitter {
    listener: THREE.AudioListener;
    private sound;
    private audioLoader;
    private analyser;
    readonly frequencyBinCount: number;
    constructor(option?: IAudioOption);
    load(src: string, onLoad?: Function, onPrgress?: Function, onError?: Function): void;
    Volume: number;
    getFrequencyData(): Uint8Array;
}
