/* 
GAME OF SNAKE 

TODO: Add random obstacles (triangle shaped)
TODO: Add timer to superfood
TODO: Save high scores to file

*/

const WIDTH = 600;
const HEIGHT = 600;
const ROWS = 20;
const COLS = 20;
const RIGHT = 1;
const LEFT = -1;
const UP = 2;
const DOWN = -2;
const SPEED = WIDTH / COLS;

let direction = RIGHT;
let added_piece = false;
let eaten = true;
let xPos = 300;
let yPos = 300;
let xFood;
let yFood;
let length = 3;
let snake;
let gameOver = false;
let bonusFood = false;
let bonusFlash = false;
let score = 0;
let moving = false;
let receiveNewDirection = true;
let sw = 3;
let foodCount = 0;
let obstacleSize = (HEIGHT / ROWS) - (sw * 2);
let obstacleAmount = 5;
let obstacle = false;
let obstaclePosition;

function setup()
{	
	colorMode(RGB, 100, 100, 100);
	stroke(100);
	createCanvas(WIDTH + WIDTH / 4, HEIGHT);
	frameRate(9);
	textAlign(CENTER);
	textSize(32);
	initFood();
	initSnake();
}

function draw()
{
	if (gameOver){
		gameOverScreen();
	}
	else {
		background(90, 90, 90);
		fill(70, 70, 70);
		rect(0, 0, WIDTH, HEIGHT);
		updateSnake();
		checkGameState();
		growSnake();
		updateFood();
		drawFood();
		drawObstacle();
		drawSnake();
		drawScore();
	}
}
