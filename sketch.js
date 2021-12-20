var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,allPlayers,school;
var schoolCount;
var gline,grline;
function preload() {
  backgroundImage = loadImage("download.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
