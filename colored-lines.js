function setup() {
  createCanvas(400, 400);

}

function draw() {
		colorMode(HSB, 400);
  background(400);

  for (var x = 10; x < width-10; x = x + 10) {
		for (var y = 10; y < width-10; y = y + 10) {

    line(x, height/2, mouseX, mouseY);
		strokeWeight(1);

    stroke(x, y,400);
  }
	}

  }
