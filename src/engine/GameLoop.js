import {Camera} from './Camera.js';
import {WorldGenerator} from './WorldGenerator.js';
import {calculateCurrentBiomeState} from '../biomes/BiomeManager.js';
import {convertRgbArrayToString} from '../utils/ColorUtils.js';
import {calculateTerrainHeight} from '../utils/MathUtils.js';

export class GameLoop{
constructor(uiManager){
this.canvas = document.getElementById('biome-exploration-canvas');
if(!this.canvas)
throw new Error('Canvas not found');
this.ctx = this.canvas.getContext('2d');
if(!this.ctx)
throw new Error('Context not found');

this.uiManager = uiManager;
this.camera = new Camera();
this.lastTime = performance.now();
this.animationId = null;
this.isRunning = false;
this.resize();
window.addEventListener('resize', () => this.resize());
}

resize(){
const width = window.innerWidth || 800;
const height = window.innerHeight || 600;
this.canvas.width = width;
this.canvas.height = height;
this.worldGenerator = new WorldGenerator(width, height);
}

setSprintingState(sprinting){
this.camera.setSprintingState(sprinting);
}
start(){
if(this.isRunning)
return;
this.isRunning = true;
this.lastTime = performance.now();
this.animationId = requestAnimationFrame((ts) => this.frame(ts));
}

stop(){
this.isRunning = false;
if(this.animationId){
cancelAnimationFrame(this.animationId);
 }
}

frame(timestamp){
if(!this.isRunning)
return;

let deltaTime = (timestamp - this.lastTime) / 1000;
this.lastTime = timestamp;

if(deltaTime <= 0 || deltaTime > 0.2){
deltaTime = 1 / 60;
}

this.update(deltaTime);
this.render();
this.animationId = requestAnimationFrame((ts) => this.frame(ts));
}

update(deltaTime){
this.camera.update(deltaTime);
const position = this.camera.getPosition();
const biome = calculateCurrentBiomeState(position);
this.worldGenerator.updateTrees(position, biome.primaryTreeType);
this.worldGenerator.updateParticles(deltaTime);

if(this.uiManager){
this.uiManager.updateDistance(Math.floor(position));
this.uiManager.updateBiomeName(biome.name);
 }
}

render(){
const position = this.camera.getPosition();
const biome = calculateCurrentBiomeState(position);
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
this.drawSky(biome);
this.drawMountains(position, biome);
this.drawTerrain(position, biome);
this.drawTrees(position, biome);
this.drawParticles(biome);
}

drawSky(biome){
const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height * 0.7);
gradient.addColorStop(0, convertRgbArrayToString(biome.skyTop));
gradient.addColorStop(1, convertRgbArrayToString(biome.skyBottom));
this.ctx.fillStyle = gradient;
this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

drawMountains(position, biome){
this.ctx.fillStyle = convertRgbArrayToString(biome.mountainColor);
const offset = (position * 0.2) % 800;
const mountains = this.worldGenerator.getMountains();
const baseY = this.canvas.height * 0.65;

mountains.forEach(mountain=>{
let x = mountain.positionX - offset;
if(x + mountain.width < -100){
x += 800 * mountains.length;
}

this.ctx.beginPath();
this.ctx.moveTo(x, baseY);
this.ctx.lineTo(x + mountain.width / 2, baseY - mountain.peakHeight);
this.ctx.lineTo(x + mountain.width, baseY);
this.ctx.closePath();
this.ctx.fill();
});
}

drawTerrain(position, biome){
const gradient = this.ctx.createLinearGradient(0, this.canvas.height * 0.6, 0, this.canvas.height);
gradient.addColorStop(0, convertRgbArrayToString(biome.groundTop));
gradient.addColorStop(1, convertRgbArrayToString(biome.groundBottom));
this.ctx.fillStyle = gradient;
this.ctx.beginPath();
this.ctx.moveTo(0, this.canvas.height);

for(let x = 0; x <= this.canvas.width; x += 10){
const worldX = x + position;
this.ctx.lineTo(x, calculateTerrainHeight(worldX));
}
this.ctx.lineTo(this.canvas.width, this.canvas.height);
this.ctx.closePath();
this.ctx.fill();
}

drawTrees(position, biome){
const trees = this.worldGenerator.getTrees();
trees.sort((a, b) => a.depthFactor - b.depthFactor);
trees.forEach(tree=>{
const screenX = tree.worldPositionX - position;
if(screenX >= -100 && screenX <= this.canvas.width + 100){
tree.render(this.ctx, screenX, biome.treeColor);
 }
  });
}

drawParticles(biome){
const particles = this.worldGenerator.getParticles();
const color = convertRgbArrayToString(biome.particleColor);
particles.forEach(particle => particle.render(this.ctx, color));
 }
}