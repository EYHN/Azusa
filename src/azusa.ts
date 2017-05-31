import { randomRange } from './util/randomRange';
import { Triangle } from './Triangle';
import { range } from './util/range';
import { node } from './node';
import { Audio } from './audio';
import { EventEmitter } from 'events';
import * as THREE from 'three';

require('./lib/LuminosityHighPassShader.js');
require('./lib/CopyShader.js');
require('./lib/EffectComposer.js');
require('./lib/RenderPass.js');
require('./lib/ShaderPass.js');
require('./lib/UnrealBloomPass');

interface IAzusaOption {
  view?: HTMLCanvasElement;
  width?: number;
  height?: number;
  subdivisionSize?: number;
  cutEnd?: number;
  cutFront?: number;
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
  private cutFront: number;
  private cutEnd: number;
  private TriangleGroup: THREE.Group;
  private Triangles: Triangle[] = [];
  public audio: Audio;
  constructor(option: IAzusaOption = {}) {
    super();
    const {
      width = window.innerWidth,
      height = window.innerHeight,
      subdivisionSize = 1024,
      cutFront = 0,
      cutEnd = 0
    } = option;
    this.cutFront = cutFront;
    this.cutEnd = cutEnd;
    const renderer = new THREE.WebGLRenderer({
      canvas: option.view,
      alpha: true,
      antialias: true
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

    const light = new THREE.DirectionalLight(0xffffff);
    scene.add(light);

    this.scene = scene;
    this.camera = camera;

    const frequencyBinCount = this.loadAudio(subdivisionSize).frequencyBinCount;

    this.lineGroup = this.loadLine(frequencyBinCount - cutEnd - cutFront);

    this.TriangleGroup = this.loadTriangle();

    this.scene.add(this.TriangleGroup);
    this.scene.add(this.lineGroup);
    this.renderer = renderer;
    this.clock = new THREE.Clock();
    this.render();
    this.resize(width, height);
  }

  loadGui() {
    const params = {
      projection: 'normal',
      background: false,
      exposure: 1.0,
      bloomStrength: 1.5,
      bloomThreshold: 0.2,
      bloomRadius: 0
    };
    const gui = new dat.GUI();
    gui.add(params, 'exposure', 0.1, 2);
    gui.add(params, 'bloomThreshold', 0.0, 1.0).onChange((value: any) => {
      this.bloomPass.threshold = Number(value);
    });
    gui.add(params, 'bloomStrength', 0.0, 3.0).onChange((value: any) => {
      this.bloomPass.strength = Number(value);
    });
    gui.add(params, 'bloomRadius', 0.0, 1.0).onChange((value: any) => {
      this.bloomPass.radius = Number(value);
    });
    gui.open();
  }

  resize(width: number, height: number) {
    this.camera.aspect = width / height;
    if (width <= 425) {
      this.camera.fov = 70;
    } else {
      this.camera.fov = 45;
    }
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);
  }

  private loadLine(nodeCount: number) {
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x03a9f4 });

    this.nodes = range(0, nodeCount).map((index) => {
      return new node(20, (index / nodeCount * 360 + 45) % 360, new THREE.Vector2(0, 0));
    })

    this.lineB = new THREE.Line(
      new THREE.BufferGeometry().addAttribute('position',
        this.renderGeometries(
          this.nodes.map(node => node.positionB)
        ).setDynamic(true))
      , lineMaterial);

    this.lineA = new THREE.Line(
      new THREE.BufferGeometry().addAttribute('position',
        this.renderGeometries(
          this.nodes.map(node => node.positionA)
        ).setDynamic(true))
      , lineMaterial);

    this.lines = range(0, nodeCount).map((index) => {
      return new THREE.Line(
        new THREE.BufferGeometry().addAttribute('position',
          this.renderGeometries(
            [this.nodes[index].positionA, this.nodes[index].positionB]
          ).setDynamic(true))
        , lineMaterial);
    })
    const lineGroup = new THREE.Group();
    lineGroup.add(this.lineB);
    lineGroup.add(this.lineA);

    this.lines.forEach(line => lineGroup.add(line));
    return lineGroup;
  }

  private loadAudio(fftsize: number) {
    this.audio = new Audio({ fftsize });
    this.camera.add(this.audio.listener);
    return this.audio;
  }

  private loadTriangle() {
    const TriangleGroup = new THREE.Group();
    const material = new THREE.MeshBasicMaterial({ color: 0x03a9f4 });
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x03a9f4 });
    setInterval(this.addTriangle.bind(this, material, lineMaterial), 500);
    return TriangleGroup;
  }

  private addTriangle(
    material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x03a9f4 }),
    lineMaterial: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({ color: 0x03a9f4 })) {
    const point = this.Triangles.length;
    const triangle = this.makeTriangle(material, lineMaterial, (t) => {
      this.Triangles = this.Triangles.filter((triangle) => {
        return triangle !== t;
      })
      this.TriangleGroup.remove(t.group);
    });
    this.TriangleGroup.add(triangle.group);
    this.Triangles.push(triangle);
  }

  private makeTriangle(
    material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x03a9f4 }),
    lineMaterial: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({ color: 0x03a9f4 }),
    cb: (t: Triangle) => void) {
    const triangle = new Triangle(2, new THREE.Vector3(0, 0, 0), Math.random() * 360, randomRange(5, 1), randomRange(0.1, 0.02), material, lineMaterial, {
      startShow: 15,
      endShow: 30,
      startHide: 60,
      endHide: 70
    }, cb)
    return triangle;
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
    let audioDate = this.audio.getFrequencyData()
    const Delta = this.clock.getDelta();
    const cutAudioDate = audioDate.slice(this.cutFront, audioDate.length - this.cutEnd)
    this.nodes.forEach((node, index, array) => {
      node.strength = cutAudioDate[(index) % array.length] * 0.1;
      node.transition(Delta);
    })

    this.scale = 1 + audioDate[Math.ceil(audioDate.length * 0.05)] / 1000;
    this.updateGeometries();
    this.Triangles.forEach(triangle => triangle.transition(Delta));
    // geometries.forEach((geometry, index) => {
    //   this.lines[index].geometry = geometry
    // });
    requestAnimationFrame(this.render.bind(this));
  }
}
