function checkSpawn()
{
	for (let i = 0; i < snake.length; i++){
		if (xFood == snake[i].x && yFood == snake[i].y){
			console.log("Changing food location");
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

function updateFood()
{
	while (!checkSpawn(xFood, yFood))
	{
		xFood = getRandPosition();
		yFood = getRandPosition();
	}
}

function drawFood()
{
	fill(80, 0, 0);
	noStroke();
	rect(xFood, yFood, HEIGHT / ROWS, WIDTH / COLS);
}
