import {interpolateColorChannels} from '../../utils/ColorUtils.js';
import {convertRgbArrayToString} from '../../utils/ColorUtils.js';

export function renderMushroomTree(renderingContext, positionX, positionY, treeScale, colorRgb){
let stemWidth = 12 * treeScale;
let stemHeight = 45 * treeScale;
let capColor = convertRgbArrayToString(colorRgb);
let stemColor = convertRgbArrayToString(interpolateColorChannels(colorRgb, [220, 210, 200], 0.8));

renderingContext.fillStyle = stemColor;
renderingContext.beginPath();
renderingContext.moveTo(positionX - stemWidth / 2, positionY);
renderingContext.lineTo(positionX - stemWidth / 2 - 4 * treeScale, positionY - stemHeight);
renderingContext.lineTo(positionX + stemWidth / 2 + 4 * treeScale, positionY - stemHeight);
renderingContext.lineTo(positionX + stemWidth / 2, positionY);
renderingContext.closePath();
renderingContext.fill();
renderingContext.fillStyle = capColor;
renderingContext.beginPath();
renderingContext.ellipse(positionX, positionY - stemHeight, 40 * treeScale, 25 * treeScale, 0, Math.PI, 0);
renderingContext.fill();
renderingContext.fillStyle = 'rgba(255, 255, 255, 0.6)';
renderingContext.beginPath();
renderingContext.arc(positionX - 15 * treeScale, positionY - stemHeight - 10 * treeScale, 5 * treeScale, 0, Math.PI * 2);
renderingContext.fill();
renderingContext.beginPath();
renderingContext.arc(positionX + 10 * treeScale, positionY - stemHeight - 12 * treeScale, 7 * treeScale, 0, Math.PI * 2);
renderingContext.fill();
 }