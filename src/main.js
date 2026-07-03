import {GameLoop} from './engine/GameLoop.js';

let gameLoopInstance = null;

function init(){
if(window.location.protocol === 'file:'){
alert('ERROR: You are opening this file directly. ES6 Modules require a local server. Please use VS Code "Live Server" or run `npx serve`.');
return;
}
const canvas = document.getElementById('biome-exploration-canvas');
const distanceValueText = document.getElementById('distance-value-text');
const biomeNameText = document.getElementById('biome-name-text');
const sprintPromptOverlay = document.getElementById('sprint-prompt-overlay');

if(!canvas || !distanceValueText || !biomeNameText || !sprintPromptOverlay){
console.error('Missing DOM elements');
return;
}

if(gameLoopInstance){
gameLoopInstance.stop();
}

const uiManager={
updateDistance: (distance) => {distanceValueText.textContent = distance;},
updateBiomeName: (biomeName) => {biomeNameText.textContent = biomeName;},
hideSprintPrompt: () => {sprintPromptOverlay.classList.add('hidden');}
};
gameLoopInstance = new GameLoop(uiManager);
const handleStart = ()=>{
gameLoopInstance.setSprintingState(true);
uiManager.hideSprintPrompt();
};
const handleEnd = ()=>{
gameLoopInstance.setSprintingState(false);
};

window.addEventListener('mousedown', handleStart);
window.addEventListener('mouseup', handleEnd);
window.addEventListener('touchstart', handleStart, { passive: true });
window.addEventListener('touchend', handleEnd, { passive: true });
gameLoopInstance.start();
}

if(document.readyState === 'loading'){
document.addEventListener('DOMContentLoaded', init);
 }
else{
init();
}