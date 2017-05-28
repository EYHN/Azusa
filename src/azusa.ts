import { range } from './util/range';
import { node } from './node';
import { Audio } from './audio';
import { EventEmitter } from 'events';
import * as THREE from 'three';

interface IAzusaOption {
  view?: HTMLCanvasElement;
  width?: number;
  height?: number;
  subdivisionSize?: number;
}

export default class Azusa extends EventEmitter {
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private lines: THREE.Line[];
  private lineA: THREE.Line;
  private lineB: THREE.Line;
  private nodes: node[];
  private clock: THREE.Clock;
  private scale: number = 1;
  private lineGroup: THREE.Group;
  private composer: THREE.EffectComposer;
  private bloomPass: any;
  public audio: Audio;
  constructor(option: IAzusaOption = {}) {
    super();
    const {
      width = window.innerWidth,
      height = window.innerHeight,
      subdivisionSize = 1024
    } = option;
    const renderer = new THREE.WebGLRenderer({
      canvas: option.view
    });
    renderer.setSize(width, height);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const scene = new THREE.Scene();

    this.composer = new THREE.EffectComposer(renderer)
    this.composer.setSize(width, height);
    const renderScene = new THREE.RenderPass(scene, camera)
    this.composer.addPass(renderScene);
    this.bloomPass = new (THREE as any).UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.2, 0);
    this.composer.addPass(this.bloomPass);
    const copyShader = new THREE.ShaderPass(THREE.CopyShader);
    copyShader.renderToScreen = true;
    this.composer.addPass(copyShader);

    this.scene = scene;
    this.camera = camera;

    const frequencyBinCount = this.loadAudio(subdivisionSize).frequencyBinCount;

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    const nodeCount = frequencyBinCount * 0.80;

    this.nodes = range(0, nodeCount).map((index) => {
      return new node(20, (index / nodeCount * 360 + 45) % 360, new THREE.Vector2(0, 0));
    })

    this.lineB = new THREE.Line(
      new THREE.BufferGeometry().addAttribute('position',
        this.renderGeometries(
          this.nodes.map(node => node.positionB)
        ))
      , lineMaterial);

    this.lineA = new THREE.Line(
      new THREE.BufferGeometry().addAttribute('position',
        this.renderGeometries(
          this.nodes.map(node => node.positionA)
        ))
      , lineMaterial);

    this.lines = range(0, nodeCount).map((index) => {
      return new THREE.Line(
        new THREE.BufferGeometry().addAttribute('position',
          this.renderGeometries(
            [this.nodes[index].positionA, this.nodes[index].positionB]
          ))
        , lineMaterial);
    })
    this.lineGroup = new THREE.Group();
    this.lineGroup.add(this.lineB);
    this.lineGroup.add(this.lineA);
    this.lines.forEach(line => this.lineGroup.add(line));
    this.scene.add(this.lineGroup);
    this.renderer = renderer;
    this.clock = new THREE.Clock();
    this.render();
    this.loadGui();
  }
  loadGui() {
    const params = {
      projection: 'normal',
      background: false,
      exposure: 1.0,
      bloomStrength: 1.5,
      bloomThreshold: 0.85,
      bloomRadius: 0.4
    };
    const gui = new dat.GUI();
    gui.add(params, 'exposure', 0.1, 2);
    gui.add(params, 'bloomThreshold', 0.0, 1.0).onChange((value:any) => {
      this.bloomPass.threshold = Number(value);
    });
    gui.add(params, 'bloomStrength', 0.0, 3.0).onChange((value:any) => {
      this.bloomPass.strength = Number(value);
    });
    gui.add(params, 'bloomRadius', 0.0, 1.0).onChange((value:any) => {
      this.bloomPass.radius = Number(value);
    });
    gui.open();
  }
  resize(width: number, height: number) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);
  }

  private loadAudio(fftsize: number) {
    this.audio = new Audio({ fftsize });
    this.camera.add(this.audio.listener);
    return this.audio;
  }

  private renderGeometries(vertices: THREE.Vector2[]) {
    const res: number[] = [];
    vertices = vertices.concat(vertices[0])
    vertices.forEach((value) => {
      res.push(value.x, value.y, 0);
    })
    return new THREE.BufferAttribute(new Float32Array(res), 3);
  }

  private updateGeometries() {
    if (this.nodes) {
      this.lineGroup.scale.set(this.scale, this.scale, this.scale);
      const geometryA = this.lineA.geometry as THREE.BufferGeometry;
      const AttributeA = geometryA.getAttribute('position') as THREE.BufferAttribute;
      const geometryB = this.lineB.geometry as THREE.BufferGeometry;
      const AttributeB = geometryB.getAttribute('position') as THREE.BufferAttribute;

      const positions = this.nodes.map((value) => {
        return [value.positionA, value.positionB];
      });
      positions.forEach((position, index) => {
        AttributeA.set([position[0].x, position[0].y], index * 3);
        AttributeB.set([position[1].x, position[1].y], index * 3);
        const geometry = (this.lines[index].geometry as THREE.BufferGeometry);
        const Attribute = geometry.getAttribute('position') as THREE.BufferAttribute;
        Attribute.set(
          [position[0].x, position[0].y, 0,
          position[1].x, position[1].y, 0], 0
        )
        Attribute.needsUpdate = true;
      })
      AttributeA.set([AttributeA.array[0], AttributeA.array[1]], positions.length * 3);
      AttributeB.set([AttributeB.array[0], AttributeB.array[1]], positions.length * 3);
      AttributeA.needsUpdate = true;
      AttributeB.needsUpdate = true;
    }
  }

  private render() {
    this.composer.render();
    const audioDate = this.audio.getFrequencyData()
    const Delta = this.clock.getDelta();
    this.nodes.forEach((node, index, array) => {
      node.strength = audioDate[(index) % array.length] * 0.1;
      node.transition(Delta);
    })

    this.scale = 1 + audioDate[Math.ceil(audioDate.length * 0.05)] / 1000;
    this.updateGeometries();
    // geometries.forEach((geometry, index) => {
    //   this.lines[index].geometry = geometry
    // });
    requestAnimationFrame(this.render.bind(this));
  }
}
