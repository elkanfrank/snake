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

function resetGame()
{
	snake = new Array(1);
	length = 1;
	snake[0] = createVector(300, 300);
}

function keyPressed()
{
	if (!receiveNewDirection)
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
	else if (keyCode == ENTER && gameOver)
	{
		gameOver = false;
		resetGame();
	}
	else if (keyCode == 32)
		moving = true;
}

function checkGameState()
{
	gameOver = false;
	for (let i = 1; i < snake.length - 1; i++)
	{
		if (snake[0].x == snake[i].x && snake[0].y == snake[i].y)
			gameOver = true;
	}
}
