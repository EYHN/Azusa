import Azusa from './azusa';

const testSound = require("file-loader!./static/cha.mp3");

const bgImg = require("file-loader!./static/9s.jpg");

const azusa = new Azusa({
  view:document.getElementById('app') as HTMLCanvasElement,
  subdivisionSize: 1024,
  cutFront: 0,
  cutEnd: 256
});

azusa.audio.load(testSound);

azusa.audio.Volume = 0.5;

window.addEventListener('resize', () => {
  azusa.resize(window.innerWidth,window.innerHeight);
})

document.getElementById('bg').style.backgroundImage = `url('${bgImg}')`