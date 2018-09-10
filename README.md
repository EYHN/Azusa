
# Azusa

[![Author](https://img.shields.io/badge/author-EYHN-blue.svg?style=flat-square)](https://delusion.coding.me)
[![QQ](https://img.shields.io/badge/QQ-1106996185-blue.svg?style=flat-square)](http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes)
[![Email](https://img.shields.io/badge/Emali%20me-cneyhn@gmail.com-green.svg?style=flat-square)]()
[![npm version](https://badge.fury.io/js/azusa.svg)](https://badge.fury.io/js/azusa)
[![dependency](https://img.shields.io/badge/dependency-threejs-blue.svg?style=flat-square)](https://threejs.org/)

![](./azusa.jpg)

A WEBGL Audio Spectrum Music Visualizer.

![](./example.gif)

# How to use

- webpack
  ```
  npm install azusa --save
  ```
  ```
  import Azusa from 'azusa'
  ```

# example

## typescript from src
```typescript
const azusa = new Azusa({
  view: document.getElementById('app') as HTMLCanvasElement,
  subdivisionSize: 1024,
  cutEnd: 256
});

azusa.audio.load({
  src: testSound,
  onLoad: (buffer: THREE.AudioBuffer) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  onPrgress: (xhr: ProgressEvent) => {},
  onError: () => {}
});

azusa.audio.Volume = 0.5;

window.addEventListener('resize', () => {
  azusa.resize(window.innerWidth, window.innerHeight);
})
```

## umd
```html
<div id="bg"></div>
<canvas id="app"></canvas>

<script src="https://cdn.jsdelivr.net/npm/three"></script>
<script src="./lib/azusa.min.js"></script>
<script>

  const azusa = new Azusa({
    view: document.getElementById('app'),
    subdivisionSize: 1024,
    cutEnd: 256
  });

  azusa.audio.load({
    src: './example/media/cha.mp3',
    onPrgress: (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }
  });

  azusa.audio.setVolume(0.5);

  window.addEventListener('resize', () => {
    azusa.resize(window.innerWidth, window.innerHeight);
  })

  const container = document.getElementById('bg')
  container && (container.style.backgroundImage = "url(./example/media/9s.jpg)")

</script>
```

[Click here to demo](https://eyhn.github.io/Azusa/example)
