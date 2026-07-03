export class Camera{
constructor(){
this.positionX = 0;
this.baseScrollSpeed = 120;
this.currentScrollSpeed = 120;
this.sprintSpeedMultiplier = 2.5;
this.isSprinting = false;
}

setSprintingState(sprintState){
this.isSprinting = sprintState;
}
update(deltaTime){
let targetSpeed = this.isSprinting ? this.baseScrollSpeed * this.sprintSpeedMultiplier : this.baseScrollSpeed;
this.currentScrollSpeed += (targetSpeed - this.currentScrollSpeed) * 0.05;
this.positionX += this.currentScrollSpeed * deltaTime;
}
getPosition(){
return this.positionX;
 }
}
