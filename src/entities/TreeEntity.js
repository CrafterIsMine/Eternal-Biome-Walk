import {calculateTerrainHeight} from '../utils/MathUtils.js';
import {generateRandomNumber} from '../utils/MathUtils.js';
import {renderPineTree} from './renderers/PineTreeRenderer.js';
import {renderOakTree} from './renderers/OakTreeRenderer.js';
import {renderCactusTree} from './renderers/CactusTreeRenderer.js';
import {renderMushroomTree} from './renderers/MushroomTreeRenderer.js';

export class TreeEntity{
constructor(worldPositionX){
this.worldPositionX = worldPositionX;
this.baseY = calculateTerrainHeight(worldPositionX);
this.scale = generateRandomNumber(0.6, 1.4);
this.depthFactor = generateRandomNumber(0.5, 1.0);
this.scale *= this.depthFactor;
this.treeType = 'pine';
}

updateType(biomePrimaryType){
this.treeType = biomePrimaryType;
}
render(renderingContext, screenPositionX, colorRgb){
if(this.treeType === 'pine'){
renderPineTree(renderingContext, screenPositionX, this.baseY, this.scale, colorRgb);
}
else if(this.treeType === 'oak'){
renderOakTree(renderingContext, screenPositionX, this.baseY, this.scale, colorRgb);
}
else if(this.treeType === 'cactus'){
renderCactusTree(renderingContext, screenPositionX, this.baseY, this.scale, colorRgb);
}
else if(this.treeType === 'mushroom'){
renderMushroomTree(renderingContext, screenPositionX, this.baseY, this.scale, colorRgb);
}
 }
}