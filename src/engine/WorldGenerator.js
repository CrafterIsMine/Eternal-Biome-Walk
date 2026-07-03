import {TreeEntity} from '../entities/TreeEntity.js';
import {ParticleEntity} from '../entities/ParticleEntity.js';
import {generateRandomNumber} from '../utils/MathUtils.js';

export class WorldGenerator{
constructor(canvasWidth, canvasHeight){
this.canvasWidth = canvasWidth;
this.canvasHeight = canvasHeight;
this.activeTrees = [];
this.activeParticles = [];
this.backgroundMountains = [];
this.initializeTreePopulation();
this.initializeParticlePopulation();
this.generateBackgroundMountains();
}

updateDimensions(newWidth, newHeight){
this.canvasWidth = newWidth;
this.canvasHeight = newHeight;
this.generateBackgroundMountains();
}

initializeTreePopulation(){
this.activeTrees = [];
let spawnPosition = 0;
while(spawnPosition < this.canvasWidth + 400){
let treeOffset = generateRandomNumber(40, 100);
spawnPosition += treeOffset;
this.activeTrees.push(new TreeEntity(spawnPosition));
 }
}
initializeParticlePopulation(){
this.activeParticles = [];
for(let particleIndex = 0; particleIndex < 80; particleIndex++){
this.activeParticles.push(new ParticleEntity(this.canvasWidth, this.canvasHeight));
 }
}

generateBackgroundMountains(){
this.backgroundMountains = [];
let mountainPositionX = 0;
while(mountainPositionX < this.canvasWidth + 400){
let peakHeight = generateRandomNumber(100, 250);
let mountainWidth = generateRandomNumber(200, 500);
this.backgroundMountains.push({ 
positionX: mountainPositionX, 
peakHeight: peakHeight, 
width: mountainWidth 
});
mountainPositionX += mountainWidth * 0.6;
 }
}

updateTrees(cameraPositionX, biomePrimaryType){
let treeIndex = 0;
while(treeIndex < this.activeTrees.length){
let tree = this.activeTrees[treeIndex];
let screenPositionX = tree.worldPositionX - cameraPositionX;
tree.updateType(biomePrimaryType);
if(screenPositionX < -100){
let furthestTreeX = 0;
for(let searchIndex = 0; searchIndex < this.activeTrees.length; searchIndex++){
if (this.activeTrees[searchIndex].worldPositionX > furthestTreeX) {
furthestTreeX = this.activeTrees[searchIndex].worldPositionX;
 }
}
tree.worldPositionX = furthestTreeX + generateRandomNumber(40, 100);
tree.scale = generateRandomNumber(0.6, 1.4) * tree.depthFactor;
  }
treeIndex++;
}
 }
updateParticles(deltaTime){
for(let particleIndex = 0; particleIndex < this.activeParticles.length; particleIndex++){
this.activeParticles[particleIndex].update(deltaTime, this.canvasWidth, this.canvasHeight);
 }
}

getTrees(){
return this.activeTrees;
}

getParticles(){
return this.activeParticles;
}

getMountains(){
return this.backgroundMountains;
 }
}