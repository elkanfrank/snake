function checkSpawn()
{
	for (let i = 0; i < snake.length; i++){
		if (xFood == snake[i].x && yFood == snake[i].y){
			return false;
		}
	}
	return true;
}

function initFood()
{
	xFood = getRandPosition();
	yFood = getRandPosition();
}

function spawnBonusFood()
{
	xBonus = getRandPosition();
	yBonus = getRandPosition();
	bonusFood = true;
}

function updateFood()
{
	while (!checkSpawn(xFood, yFood))
	{
		xFood = getRandPosition();
		yFood = getRandPosition();
		if (Math.round(Math.random() * 10) > 8 && !bonusFood)
			spawnBonusFood();
	}
}

function drawFood()
{
	strokeWeight(sw * 2);
	stroke(70, 70, 70);
	fill(80, 0, 0);
	rect(xFood, yFood, (HEIGHT / ROWS) - (sw * 2), (WIDTH / COLS) - (sw * 2));
	if (bonusFood)
	{
		fill(85, 85, 85);
		if (bonusFlash)
		fill(0, 20, 80);
		bonusFlash = (bonusFlash + 1) % 2;
		rect(xBonus, yBonus, (HEIGHT / ROWS) - (sw * 2), (WIDTH / COLS) - (sw * 2));
	}
	noStroke();
}

function drawObstacle()
{
	if (foodCount % 2 == 0 && foodCount != 0 && !obstacle){
		obstacle = true;
		obstaclePosition = new Array(obstacleAmount);
		let startPosition = createVector(getRandPosition(), getRandPosition());
		for (let i = 0; i < obstacleAmount; i = i + 1){
			obstaclePosition[i] = createVector(startPosition.x, startPosition.y);
			startPosition.x += SPEED;
		}
	}
	if (obstacle)
	{
		fill(255, 255, 255);
		for (let j = 0; j < obstaclePosition.length; j++){
			triangle(obstaclePosition[j].x, obstaclePosition[j].y + obstacleSize, 
				obstaclePosition[j].x + (obstacleSize / 2), obstaclePosition[j].y, 
				obstaclePosition[j].x + obstacleSize, obstaclePosition[j].y + obstacleSize);
		}
	}
}
