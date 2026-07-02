import {convertRgbArrayToString} from '../../utils/ColorUtils.js';

export function renderCactusTree(renderingContext, positionX, positionY, treeScale, colorRgb){
let trunkWidth = 14 * treeScale;
let trunkHeight = 70 * treeScale;
let foliageColor = convertRgbArrayToString(colorRgb);

renderingContext.fillStyle = foliageColor;
renderingContext.beginPath();
renderingContext.roundRect(positionX - trunkWidth / 2, positionY - trunkHeight, trunkWidth, trunkHeight, trunkWidth / 2);
renderingContext.fill();
renderingContext.beginPath();
renderingContext.roundRect(positionX - trunkWidth / 2 - 15 * treeScale, positionY - trunkHeight * 0.7, 12 * treeScale, 30 * treeScale, 6 * treeScale);
renderingContext.fill();
renderingContext.beginPath();
renderingContext.roundRect(positionX + trunkWidth / 2 + 3 * treeScale, positionY - trunkHeight * 0.5, 12 * treeScale, 25 * treeScale, 6 * treeScale);
renderingContext.fill();
 }
