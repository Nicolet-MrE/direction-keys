import { Keytracker } from "./classes/Keytracker.js";
console.log('js connected');

const keys = new Keytracker();
keys.checkKeys();

const field = document.getElementById('field');
const car = document.getElementById('car');
let speed = 3;
let left = 287;
let top = 287;



function gameLoop(){
    if(keys.states.w){
        top = top - speed;
        car.style.top = `${top}px`;
    }
    if(keys.states.s){
        top = top + speed;
        car.style.top = `${top}px`;
    }
    if(keys.states.a){
        left = left - speed;
        car.style.left = `${left}px`;
    }
    if(keys.states.d){ 
        left = left + speed;
        car.style.left = `${left}px`;
    }
    if(keys.states.spaceBar){
       car.style.backgroundColor = "blue";
    }else{
        car.style.backgroundColor = "red";
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);