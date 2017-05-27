import { Audio } from './audio';
import { EventEmitter } from 'events';
import * as THREE from 'three';

const testSound = require("url-loader!./static/test.mp3");

interface IAzusaOption {
  view?: HTMLCanvasElement
}

export default class Azusa extends EventEmitter {
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private audio: Audio;
  constructor(option?: IAzusaOption) {
    super();
    const renderer = new THREE.WebGLRenderer({
      canvas: option.view
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const scene = new THREE.Scene();

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

    var geometry = new THREE.BufferGeometry();
    var vertices = new Float32Array([
      -10, 0, 0,
      0, 10, 0,
      10, 0, 0,
      0, -10 ,0
    ]);
    geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));

    var line = new THREE.Line(geometry, lineMaterial);

    scene.add(line);
    renderer.render(scene, camera);
    this.camera = camera;
  }
  loadAudio() {
    this.audio = new Audio();
    this.camera.add(this.audio.listener);
    this.audio.load(testSound);
  }
}
