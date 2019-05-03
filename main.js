/* 
GAME OF SNAKE 

BUG: Food can spawn inside snake
BUG: Snake can reverse direction if pressing arrows quickly

TODO: Add random obstacles (triangle shaped)
TODO: Add random superfood for extra points
TODO: Add score meter
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

let direction = 0;
let added_piece = false;
let eaten = true;
let snake = new Array(1);
let xPos = 300;
let yPos = 300;
let xFood = 0;
let yFood = 0;
let length = 1;
let gameOver = false;
let score = 0;

function setup()
{
	colorMode(RGB, 100, 100, 100);
	stroke(100);
	createCanvas(WIDTH + WIDTH / 4, HEIGHT);
	frameRate(9);
	textAlign(CENTER);
	textSize(32);
	snake[0] = createVector(xPos, yPos);
	initFood();
}

function drawScore()
{
	textAlign(LEFT);
	textSize(24);
	text("Score: ", WIDTH + 60, 50)
	text(score, WIDTH + 30, 80);
}

function draw()
{
	checkGameState();
	if (gameOver){
		background(80, 30, 30);
		stroke(31, 31, 31);
		fill(21, 21, 21);
		text("GAME OVER", WIDTH / 2, HEIGHT / 2);
		text("Score: ", WIDTH / 2, (HEIGHT / 2) + 60);
		text(score, (WIDTH / 2) + 60, (HEIGHT / 2) + 60);
	}
	else {
		background(90, 90, 90);
		fill(70, 70, 70);
		rect(0, 0, WIDTH, HEIGHT);
		updateSnake();
		updateFood();
		drawFood();
		drawSnake();
		drawScore();
	}
}
