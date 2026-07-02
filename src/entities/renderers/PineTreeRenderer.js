import {interpolateColorChannels} from '../../utils/ColorUtils.js';
import {convertRgbArrayToString } from '../../utils/ColorUtils.js';

export function renderPineTree(renderingContext, positionX, positionY, treeScale, colorRgb){
let trunkWidth = 6 * treeScale;
let trunkHeight = 40 * treeScale;
let foliageColor = convertRgbArrayToString(colorRgb);
let trunkColor = convertRgbArrayToString(interpolateColorChannels(colorRgb, [40, 30, 20], 0.6));

renderingContext.fillStyle = trunkColor;
renderingContext.fillRect(positionX - trunkWidth / 2, positionY - trunkHeight, trunkWidth, trunkHeight);
renderingContext.fillStyle = foliageColor;
renderingContext.beginPath();
renderingContext.moveTo(positionX, positionY - trunkHeight - 60 * treeScale);
renderingContext.lineTo(positionX + 30 * treeScale, positionY - trunkHeight + 10 * treeScale);
renderingContext.lineTo(positionX - 30 * treeScale, positionY - trunkHeight + 10 * treeScale);
renderingContext.closePath();
renderingContext.fill();
renderingContext.beginPath();
renderingContext.moveTo(positionX, positionY - trunkHeight - 30 * treeScale);
renderingContext.lineTo(positionX + 35 * treeScale, positionY - trunkHeight + 30 * treeScale);
renderingContext.lineTo(positionX - 35 * treeScale, positionY - trunkHeight + 30 * treeScale);
renderingContext.closePath();
renderingContext.fill();
 }
