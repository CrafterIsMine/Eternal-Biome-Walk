import {interpolateColorChannels} from '../../utils/ColorUtils.js';
import {convertRgbArrayToString} from '../../utils/ColorUtils.js';

export function renderOakTree(renderingContext, positionX, positionY, treeScale, colorRgb){
let trunkWidth = 10 * treeScale;
let trunkHeight = 35 * treeScale;
let foliageColor = convertRgbArrayToString(colorRgb);
let trunkColor = convertRgbArrayToString(interpolateColorChannels(colorRgb, [50, 30, 10], 0.7));

renderingContext.fillStyle = trunkColor;
renderingContext.fillRect(positionX - trunkWidth / 2, positionY - trunkHeight, trunkWidth, trunkHeight);
renderingContext.fillStyle = foliageColor;
renderingContext.beginPath();
renderingContext.arc(positionX, positionY - trunkHeight - 20 * treeScale, 35 * treeScale, 0, Math.PI * 2);
renderingContext.fill();
renderingContext.beginPath();
renderingContext.arc(positionX - 20 * treeScale, positionY - trunkHeight - 5 * treeScale, 25 * treeScale, 0, Math.PI * 2);
renderingContext.fill();
renderingContext.beginPath();
renderingContext.arc(positionX + 20 * treeScale, positionY - trunkHeight - 5 * treeScale, 25 * treeScale, 0, Math.PI * 2);
renderingContext.fill();
 }
