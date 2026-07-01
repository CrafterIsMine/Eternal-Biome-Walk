import {TundraBiome} from './definitions/TundraBiome.js';
import {ForestBiome} from './definitions/ForestBiome.js';
import {DesertBiome} from './definitions/DesertBiome.js';
import {FungalBiome} from './definitions/FungalBiome.js';
import {interpolateColorChannels} from '../utils/ColorUtils.js';
import {smoothStepInterpolation} from '../utils/MathUtils.js';
const biomeDefinitions = [TundraBiome, ForestBiome, DesertBiome, FungalBiome];
export function calculateCurrentBiomeState(totalDistance){
let cycleLength = 8000;
let progressInCycle = (totalDistance % cycleLength)/cycleLength;
let totalBiomes = biomeDefinitions.length;
let currentBiomeIndex = Math.floor(progressInCycle * totalBiomes);
let nextBiomeIndex = (currentBiomeIndex + 1) % totalBiomes;
let localTransitionProgress = (progressInCycle * totalBiomes) % 1;

let currentBiome = biomeDefinitions[currentBiomeIndex];
let nextBiome = biomeDefinitions[nextBiomeIndex];
let smoothTransitionFactor = smoothStepInterpolation(0, 1, localTransitionProgress);
return{
name: smoothTransitionFactor < 0.5 ? currentBiome.name : nextBiome.name,
skyTop: interpolateColorChannels(currentBiome.skyTop, nextBiome.skyTop, smoothTransitionFactor),
skyBottom: interpolateColorChannels(currentBiome.skyBottom, nextBiome.skyBottom, smoothTransitionFactor),
groundTop: interpolateColorChannels(currentBiome.groundTop, nextBiome.groundTop, smoothTransitionFactor),
groundBottom: interpolateColorChannels(currentBiome.groundBottom, nextBiome.groundBottom, smoothTransitionFactor),
treeColor: interpolateColorChannels(currentBiome.treeColor, nextBiome.treeColor, smoothTransitionFactor),
mountainColor: interpolateColorChannels(currentBiome.mountainColor, nextBiome.mountainColor, smoothTransitionFactor),
particleColor: interpolateColorChannels(currentBiome.particleColor, nextBiome.particleColor, smoothTransitionFactor),
primaryTreeType: smoothTransitionFactor < 0.5 ? currentBiome.primaryTreeType : nextBiome.primaryTreeType,
biomeIndex: currentBiomeIndex,
transitionProgress: smoothTransitionFactor
 };
}