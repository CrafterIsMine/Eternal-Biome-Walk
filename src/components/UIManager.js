export class UIManager{
constructor(){
this.distanceValueText = document.getElementById('distance-value-text');
this.biomeNameText = document.getElementById('biome-name-text');
this.sprintPromptOverlay = document.getElementById('sprint-prompt-overlay');
}

updateDistance(distance){
this.distanceValueText.textContent = distance;
}
updateBiomeName(biomeName){
this.biomeNameText.textContent = biomeName;
}
hideSprintPrompt(){
this.sprintPromptOverlay.classList.add('hidden');
 }
}
