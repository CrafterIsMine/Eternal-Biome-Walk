export function linearInterpolation(startValue, endValue, interpolationFactor){
return startValue + (endValue - startValue) * interpolationFactor;
}
export function smoothStepInterpolation(edge0, edge1, value){
let clampedValue = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
return clampedValue * clampedValue * (3 - 2 * clampedValue);
}
export function calculateTerrainHeight(worldPositionX){
let baseHeight = window.innerHeight * 0.65;
let largeHillVariation = Math.sin(worldPositionX * 0.002) * 60;
let smallBumpVariation = Math.sin(worldPositionX * 0.01 + 50) * 20;
let microDetailVariation = Math.sin(worldPositionX * 0.05 + 120) * 5;
return baseHeight + largeHillVariation + smallBumpVariation + microDetailVariation;
}
export function generateRandomNumber(minimum, maximum){
return minimum + Math.random() * (maximum - minimum);
}