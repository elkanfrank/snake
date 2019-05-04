function getRandPosition()
{
	newPos = Math.floor(Math.random() * COLS) * (WIDTH / COLS);
	return newPos;
}

function drawScore()
{
	textAlign(LEFT);
	textSize(24);
	text("Score: ", WIDTH + 60, 50);
	text(score, WIDTH + 30, 80);
}

function gameOverScreen()
{
	background(80, 30, 30);
	stroke(31, 31, 31);
	fill(21, 21, 21);
	strokeWeight(0);
	text("GAME OVER", WIDTH / 2, HEIGHT / 2);
	text("Score: ", WIDTH / 2, (HEIGHT / 2) + 60);
	text(score, (WIDTH / 2) + 60, (HEIGHT / 2) + 60);
}

function resetGame()
{
	length = 3;
	moving = false;
	direction = RIGHT;
	xPos = 300;
	yPos = 300;
	snake = new Array(length);
	for (let i = 0; i < length; i++){
		snake[i] = createVector(xPos - (i * SPEED), yPos);
	}
	score = 0;
}

function keyPressed()
{
	if (keyCode == 32)
		moving = true;
	if (keyCode == ENTER && gameOver)
		{
			gameOver = false;
			resetGame();
		}
	if (!receiveNewDirection || !moving)
		return ;
	if (keyCode == UP_ARROW && direction != DOWN)
	{
		direction = UP;
		receiveNewDirection = false;
	}
	else if (keyCode == DOWN_ARROW && direction != UP)
	{
		direction = DOWN;
		receiveNewDirection = false;
	}
	else if (keyCode == RIGHT_ARROW && direction != LEFT)
	{
		receiveNewDirection = false;
		direction = RIGHT;
	}
	else if (keyCode == LEFT_ARROW && direction != RIGHT)
	{
		receiveNewDirection = false;
		direction = LEFT;
	}
}

function checkGameState()
{
	gameOver = false;
	for (let i = 1; i < snake.length - 1; i++)
	{
		if (snake[0].x == snake[i].x && snake[0].y == snake[i].y)
			gameOver = true;
	}
	if (obstacle)
	{
		for (let i = 0; i < obstaclePosition.length; i++)
		{
			if (snake[0].x == obstaclePosition[i].x && snake[0].y == obstaclePosition[i].y)
			gameOver = true;
		}
	}
}
