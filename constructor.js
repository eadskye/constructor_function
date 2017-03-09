'use strict';

function Cup(size, color, type) {

  this.size= size;
  this.color= color;
  this.type= type;

}

var redCup= new Cup('small', 'red', 'coffee');
var blueCup= new Cup('large', 'blue', 'tea');
var purpleCup= new Cup('medium', 'purple', 'hot chocolate');

console.log("I have a " + redCup.size, redCup.color, redCup.type);
console.log("I have a " + blueCup.size, blueCup.color, blueCup.type);
console.log("I have a " + purpleCup.size, purpleCup.color, purpleCup.type);
