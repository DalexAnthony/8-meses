import { butterfliesBackground } from './threejs-toys.module.js'

const pc = butterfliesBackground({
	el: document.getElementById('app'),
	eventsEl: document.body,
	gpgpuSize: 32,
	background: 0xffffff,
	material: 'basic',
	materialParams: { transparent: true, alphaTest: 0.5 },
	texture: 'https://assets.codepen.io/33787/butterflies.png',
	colors: [0xC21E56, 0xB041FF],
	textureCount: 4,
	wingsScale: [1, 1, 1],
	wingsWidthSegments: 4,
	wingsHeightSegments: 4,
	wingsSpeed: 1.25,
	wingsDisplacementScale: 1.25,
	noiseCoordScale: 0.01,
	noiseTimeCoef: 0.0005,
	noiseIntensity: 0.0025,
	attractionRadius1: 100,
	attractionRadius2: 150,
	maxVelocity: 0.25,
});