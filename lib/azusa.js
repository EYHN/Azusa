"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomRange_1 = require("./util/randomRange");
const Triangle_1 = require("./Triangle");
const range_1 = require("./util/range");
const node_1 = require("./node");
const audio_1 = require("./audio");
const events_1 = require("events");
const THREE = require("three");
require('./lib/LuminosityHighPassShader.js');
require('./lib/CopyShader.js');
require('./lib/EffectComposer.js');
require('./lib/RenderPass.js');
require('./lib/ShaderPass.js');
require('./lib/UnrealBloomPass');
class Azusa extends events_1.EventEmitter {
    constructor(option = {}) {
        super();
        this.scale = 1;
        this.Triangles = [];
        const { width = window.innerWidth, height = window.innerHeight, subdivisionSize = 1024, cutFront = 0, cutEnd = 0 } = option;
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
        this.composer = new THREE.EffectComposer(renderer);
        this.composer.setSize(width, height);
        const renderScene = new THREE.RenderPass(scene, camera);
        this.composer.addPass(renderScene);
        this.bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.2, 0);
        this.composer.addPass(this.bloomPass);
        const copyShader = new THREE.ShaderPass(THREE.CopyShader);
        copyShader.renderToScreen = true;
        this.composer.addPass(copyShader);
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
        const gui = new window.dat.GUI();
        gui.add(params, 'exposure', 0.1, 2);
        gui.add(params, 'bloomThreshold', 0.0, 1.0).onChange((value) => {
            this.bloomPass.threshold = Number(value);
        });
        gui.add(params, 'bloomStrength', 0.0, 3.0).onChange((value) => {
            this.bloomPass.strength = Number(value);
        });
        gui.add(params, 'bloomRadius', 0.0, 1.0).onChange((value) => {
            this.bloomPass.radius = Number(value);
        });
        gui.open();
    }
    resize(width, height) {
        this.camera.aspect = width / height;
        if (width <= 425) {
            this.camera.fov = 70;
        }
        else {
            this.camera.fov = 45;
        }
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
        this.composer.setSize(width, height);
    }
    loadLine(nodeCount) {
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x03a9f4 });
        this.nodes = range_1.range(0, nodeCount).map((index) => {
            return new node_1.node(20, (index / nodeCount * 360 + 45) % 360, new THREE.Vector2(0, 0));
        });
        this.lineB = new THREE.Line(new THREE.BufferGeometry().addAttribute('position', this.renderGeometries(this.nodes.map(node => node.positionB)).setDynamic(true)), lineMaterial);
        this.lineA = new THREE.Line(new THREE.BufferGeometry().addAttribute('position', this.renderGeometries(this.nodes.map(node => node.positionA)).setDynamic(true)), lineMaterial);
        this.lines = range_1.range(0, nodeCount).map((index) => {
            return new THREE.Line(new THREE.BufferGeometry().addAttribute('position', this.renderGeometries([this.nodes[index].positionA, this.nodes[index].positionB]).setDynamic(true)), lineMaterial);
        });
        const lineGroup = new THREE.Group();
        lineGroup.add(this.lineB);
        lineGroup.add(this.lineA);
        this.lines.forEach(line => lineGroup.add(line));
        return lineGroup;
    }
    loadAudio(fftsize) {
        this.audio = new audio_1.Audio({ fftsize });
        this.camera.add(this.audio.listener);
        return this.audio;
    }
    loadTriangle() {
        const TriangleGroup = new THREE.Group();
        const material = new THREE.MeshBasicMaterial({ color: 0x03a9f4 });
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x03a9f4 });
        setInterval(this.addTriangle.bind(this, material, lineMaterial), 500);
        return TriangleGroup;
    }
    addTriangle(material = new THREE.MeshBasicMaterial({ color: 0x03a9f4 }), lineMaterial = new THREE.LineBasicMaterial({ color: 0x03a9f4 })) {
        const point = this.Triangles.length;
        const triangle = this.makeTriangle(material, lineMaterial, (t) => {
            this.Triangles = this.Triangles.filter((triangle) => {
                return triangle !== t;
            });
            this.TriangleGroup.remove(t.group);
        });
        this.TriangleGroup.add(triangle.group);
        this.Triangles.push(triangle);
    }
    makeTriangle(material = new THREE.MeshBasicMaterial({ color: 0x03a9f4 }), lineMaterial = new THREE.LineBasicMaterial({ color: 0x03a9f4 }), cb) {
        const triangle = new Triangle_1.Triangle(2, new THREE.Vector3(0, 0, 0), Math.random() * 360, randomRange_1.randomRange(5, 1), randomRange_1.randomRange(0.1, 0.02), material, lineMaterial, {
            startShow: 15,
            endShow: 30,
            startHide: 60,
            endHide: 70
        }, cb);
        return triangle;
    }
    renderGeometries(vertices) {
        const res = [];
        vertices = vertices.concat(vertices[0]);
        vertices.forEach((value) => {
            res.push(value.x, value.y, 0);
        });
        return new THREE.BufferAttribute(new Float32Array(res), 3);
    }
    updateGeometries() {
        if (this.nodes) {
            this.lineGroup.scale.set(this.scale, this.scale, this.scale);
            const geometryA = this.lineA.geometry;
            const AttributeA = geometryA.getAttribute('position');
            const geometryB = this.lineB.geometry;
            const AttributeB = geometryB.getAttribute('position');
            const positions = this.nodes.map((value) => {
                return [value.positionA, value.positionB];
            });
            positions.forEach((position, index) => {
                AttributeA.set([position[0].x, position[0].y], index * 3);
                AttributeB.set([position[1].x, position[1].y], index * 3);
                const geometry = this.lines[index].geometry;
                const Attribute = geometry.getAttribute('position');
                Attribute.set([position[0].x, position[0].y, 0,
                    position[1].x, position[1].y, 0], 0);
                Attribute.needsUpdate = true;
            });
            AttributeA.set([AttributeA.array[0], AttributeA.array[1]], positions.length * 3);
            AttributeB.set([AttributeB.array[0], AttributeB.array[1]], positions.length * 3);
            AttributeA.needsUpdate = true;
            AttributeB.needsUpdate = true;
        }
    }
    render() {
        this.composer.render();
        let audioDate = this.audio.getFrequencyData();
        const Delta = this.clock.getDelta();
        const cutAudioDate = audioDate.slice(this.cutFront, audioDate.length - this.cutEnd);
        this.nodes.forEach((node, index, array) => {
            node.strength = cutAudioDate[(index) % array.length] * 0.1;
            node.transition(Delta);
        });
        this.scale = 1 + audioDate[Math.ceil(audioDate.length * 0.05)] / 1000;
        this.updateGeometries();
        this.Triangles.forEach(triangle => triangle.transition(Delta));
        // geometries.forEach((geometry, index) => {
        //   this.lines[index].geometry = geometry
        // });
        requestAnimationFrame(this.render.bind(this));
    }
}
exports.default = Azusa;
//# sourceMappingURL=azusa.js.map