import Azusa from './azusa';

const testSound = require("file-loader!./static/cha.mp3");

const bgImg = require("file-loader!./static/9s.jpg");

const azusa = new Azusa({
  view: document.getElementById('app') as HTMLCanvasElement,
  subdivisionSize: 1024,
  cutEnd: 256
});

azusa.audio.load(testSound, undefined, (xhr: any) => {
  console.log((xhr.loaded / xhr.total * 100) + '% loaded');
});

azusa.audio.Volume = 0.5;

window.addEventListener('resize', () => {
  azusa.resize(window.innerWidth, window.innerHeight);
})

document.getElementById('bg').style.backgroundImage = `url('${bgImg}')`