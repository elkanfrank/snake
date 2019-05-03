function moveSnake()
{
	if (direction == RIGHT)
		xPos += SPEED;
	else if (direction == LEFT)
		xPos -= SPEED;
	else if (direction == UP)
		yPos -= SPEED;
	else if (direction == DOWN)
		yPos += SPEED;
	if (xPos < 0)
		xPos = WIDTH - SPEED;
	else if (xPos >= WIDTH)
		xPos = 0;
	else if (yPos >= HEIGHT)
		yPos = 0;
	else if (yPos < 0)
		yPos = HEIGHT - SPEED;
}

function updateSnake()
{
	let xEnd = snake[length - 1].x;
	let yEnd = snake[length - 1].y;
	let xPrev = xPos;
	let yPrev = yPos;

	moveSnake();
	snake[0].x = xPos;
	snake[0].y = yPos;
	for (let i = snake.length - 1; i > 0; i--)
	{
		if (i == 1) {
			snake[i].x = xPrev;
			snake[i].y = yPrev;
		}
		else {
			snake[i].x = snake[i - 1].x;
			snake[i].y = snake[i - 1].y;
		}
	}
	if (xPos == xFood && yPos == yFood)
	{
		length++;
		score += 10;
		snake.push(createVector(xEnd, yEnd));
	}
}

function drawSnake()
{
	if (gameOver)
		return ;
	for (let i = 0; i < snake.length; i++){
		fill(21, 21, 21);
		rect(snake[i].x, snake[i].y, HEIGHT / ROWS, WIDTH / COLS);
	}
}
