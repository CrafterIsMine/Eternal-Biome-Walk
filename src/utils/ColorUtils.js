import{linearInterpolation} from './MathUtils.js';
export function interpolateColorChannels(startColorArray, endColorArray, interpolationFactor){
let redChannel = linearInterpolation(startColorArray[0], endColorArray[0], interpolationFactor);
let greenChannel = linearInterpolation(startColorArray[1], endColorArray[1], interpolationFactor);
let blueChannel = linearInterpolation(startColorArray[2], endColorArray[2], interpolationFactor);
return[Math.round(redChannel), Math.round(greenChannel), Math.round(blueChannel)];
 }
export function convertRgbArrayToString(rgbArray){
return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
}