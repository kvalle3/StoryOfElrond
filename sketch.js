var glowUp = 0;
//The setup function only happens once
function setup() 
{
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(173,216,230); //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() 
{
  
  //circle
  stroke(255,250,127) // an RGB color for the circle's border
  fill(130,180,10,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(230,220,glowUp,glowUp); 
  ellipse(mouseX,mouseY,glowUp,glowUp); // center of canvas, 20px dia
  fill(185,150,50,255);
  strokeWeight(4)

  //rectangle
  rect(random(width),random(height),50,50);
   if (glowUp >= 255) 
  {glowUp = 0}
  glowUp = glowUp + 10;

  fill(0);
  textSize(75);
  textFont("Helvetica")
  text('Hello :)',100, 250);




}

