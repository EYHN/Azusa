import Azusa from './azusa';

const testSound = require("file-loader!./static/test.mp3");

const azusa = new Azusa({
  view:document.getElementById('app') as HTMLCanvasElement
});

azusa.audio.load(testSound);

azusa.audio.Volume = 0.2;

window.addEventListener('resize', () => {
  azusa.resize(window.innerWidth,window.innerHeight);
})