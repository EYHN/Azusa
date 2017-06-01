/// <reference types="node" />
import { Audio } from './audio';
import { EventEmitter } from 'events';
export interface IAzusaOption {
    view?: HTMLCanvasElement;
    width?: number;
    height?: number;
    subdivisionSize?: number;
    cutEnd?: number;
    cutFront?: number;
}
export default class Azusa extends EventEmitter {
    private renderer;
    private camera;
    private scene;
    private lines;
    private lineA;
    private lineB;
    private nodes;
    private clock;
    private scale;
    private lineGroup;
    private composer;
    private bloomPass;
    private cutFront;
    private cutEnd;
    private TriangleGroup;
    private Triangles;
    audio: Audio;
    constructor(option?: IAzusaOption);
    loadGui(): void;
    resize(width: number, height: number): void;
    private loadLine(nodeCount);
    private loadAudio(fftsize);
    private loadTriangle();
    private addTriangle(material?, lineMaterial?);
    private makeTriangle(material, lineMaterial, cb);
    private renderGeometries(vertices);
    private updateGeometries();
    private render();
}
