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
	fill(80, 0, 0);
	noStroke();
	rect(xFood, yFood, HEIGHT / ROWS, WIDTH / COLS);
	if (bonusFood)
	{
		fill(85, 85, 85);
		if (bonusFlash)
			fill(0, 20, 80);
		bonusFlash = (bonusFlash + 1) % 2;
		rect(xBonus, yBonus, HEIGHT / ROWS, WIDTH / COLS);
	}
}
