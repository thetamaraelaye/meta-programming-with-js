//This function shows us how to access object keys
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

  // Task 1
var diary = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDiary() {
    for (const items of diary) {
        console.log(items);
    }
}
logDiary();
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (const [key, value] of Object.entries(bird)) {
        console.log(`${key}: ${value}`); //log key and value
    }
}
birdCan();
// Task 3
function animalCan(){
    for(props in bird) {
        console.log(bird);
    }
}
animalCan();

const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

let obj = {
        key: 1,
        value: 4
    };

let output = { ...obj };
output.value -= 2;

console.log(output.value);

function count(...basket) {
        console.log(basket.length)
    }

count(10, 9, 8, 7, 6);

//ARRay
const [a,b] =[1,2,3,4];
console.log(a);