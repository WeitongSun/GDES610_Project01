function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
    background(250, 192, 238);
    ellipse(random(0,windowWidth),random(0,windowWidth),random(0,windowWidth));
  }