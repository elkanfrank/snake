function initSnake()
{
	snake = new Array(length);
	for (let i = 0; i < length; i++){
		snake[i] = createVector(xPos - (i * SPEED), yPos);
	}
}

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
	if (moving)
		receiveNewDirection = true;
}

function growSnake()
{
	if (xPos == xFood && yPos == yFood)
	{
		score += 10;
		snake.push(createVector(snake[length - 1], snake[length - 1]));
		foodCount++;
		length++;
	}
	else if (bonusFood && xPos == xBonus && yPos == yBonus)
	{
		score += 25;
		snake.push(createVector(snake[length - 1], snake[length - 1]));
		length++;
		bonusFood = false;
	}
}

function updateSnake()
{
	let xPrev = xPos;
	let yPrev = yPos;

	if (!moving)
		return ;
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
}

function drawSnake()
{
	if (gameOver)
	return ;
	strokeWeight(sw);
	stroke(70, 70, 70);
	for (let i = 0; i < snake.length; i++){
		fill(21, 21, 21);
		rect(snake[i].x, snake[i].y, (HEIGHT / ROWS) - sw, (WIDTH / COLS) - sw);
	}
	noStroke();
}
