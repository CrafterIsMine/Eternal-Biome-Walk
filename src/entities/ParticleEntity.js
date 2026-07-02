import {generateRandomNumber} from '../utils/MathUtils.js';

export class ParticleEntity{
constructor(canvasWidth, canvasHeight){
this.resetPosition(canvasWidth, canvasHeight);
}

resetPosition(canvasWidth, canvasHeight){
this.positionX = generateRandomNumber(0, canvasWidth);
this.positionY = generateRandomNumber(0, canvasHeight * 0.5);
this.size = generateRandomNumber(2, 5);
this.velocityX = generateRandomNumber(-60, -20);
this.velocityY = generateRandomNumber(10, 40);
this.opacity = generateRandomNumber(0.3, 0.8);
}

update(deltaTime, canvasWidth, canvasHeight){
this.positionX += this.velocityX * deltaTime;
this.positionY += this.velocityY * deltaTime;

if(this.positionY > canvasHeight || this.positionX < -20){
this.positionX = canvasWidth + generateRandomNumber(0, 50);
this.positionY = generateRandomNumber(0, canvasHeight * 0.5);
this.velocityX = generateRandomNumber(-60, -20);
this.velocityY = generateRandomNumber(10, 40);
 }
}
render(renderingContext, colorRgbString){
renderingContext.globalAlpha = this.opacity;
renderingContext.fillStyle = colorRgbString;
renderingContext.beginPath();
renderingContext.arc(this.positionX, this.positionY, this.size, 0, Math.PI * 2);
renderingContext.fill();
renderingContext.globalAlpha = 1.0;
 }
}