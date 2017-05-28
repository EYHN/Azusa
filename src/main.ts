import Azusa from './azusa';
require('./lib/LuminosityHighPassShader.js');
require('./lib/CopyShader.js');
require('./lib/EffectComposer.js');
require('./lib/RenderPass.js');
require('./lib/ShaderPass.js');
require('./lib/UnrealBloomPass');

const testSound = require("file-loader!./static/cha.mp3");

const azusa = new Azusa({
  view:document.getElementById('app') as HTMLCanvasElement
});

azusa.audio.load(testSound);

azusa.audio.Volume = 0.2;

window.addEventListener('resize', () => {
  azusa.resize(window.innerWidth,window.innerHeight);
})