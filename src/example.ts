import Azusa from './azusa';

import testSound from "./static/cha.mp3";

import bgImg from "./static/9s.jpg";

const azusa = new Azusa({
  view: document.getElementById('app') as HTMLCanvasElement,
  subdivisionSize: 1024,
  cutEnd: 256
});

azusa.audio.load({
  src: testSound,
  onPrgress: (xhr: ProgressEvent) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  }
});

azusa.audio.setVolume(0.5);

window.addEventListener('resize', () => {
  azusa.resize(window.innerWidth, window.innerHeight);
})

const container = document.getElementById('bg')
container && (container.style.backgroundImage = `url('${bgImg}')`)
