"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const azusa_1 = require("./azusa");
const testSound = require("file-loader!./static/cha.mp3");
const bgImg = require("file-loader!./static/9s.jpg");
const azusa = new azusa_1.default({
    view: document.getElementById('app'),
    subdivisionSize: 1024,
    cutEnd: 256
});
azusa.audio.load(testSound, undefined, (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
});
azusa.audio.Volume = 0.5;
window.addEventListener('resize', () => {
    azusa.resize(window.innerWidth, window.innerHeight);
});
document.getElementById('bg').style.backgroundImage = `url('${bgImg}')`;
//# sourceMappingURL=example.js.map