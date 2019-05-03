function getRandPosition()
{
	newPos = Math.floor(Math.random() * COLS) * (WIDTH / COLS);
	return newPos;
}

function resetGame()
{
	snake = new Array(1);
	length = 1;
	snake[0] = createVector(300, 300);
}

function keyPressed()
{
	if (keyCode == UP_ARROW && direction != DOWN)
		direction = UP;
	else if (keyCode == DOWN_ARROW && direction != UP)
		direction = DOWN;
	else if (keyCode == RIGHT_ARROW && direction != LEFT)
		direction = RIGHT;
	else if (keyCode == LEFT_ARROW && direction != RIGHT)
		direction = LEFT;
	else if (keyCode == ENTER && gameOver)
	{
		gameOver = false;
		resetGame();
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
}
