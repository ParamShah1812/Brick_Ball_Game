let ball_x, ball_y, ball_dx, ball_dy, ball_diameter;
let paddle_x, paddle_y, paddle_width, paddle_height, Score, life;
function setup() {
  createCanvas(400, 400);
  background("black");
  fill("white");
  // circle(width / 2, height / 2, 30);
  ball_x = width/2;
  ball_y = height/2;
  ball_dx = 1;
  ball_dy = 1;
  ball_diameter = 30;
  paddle_width = 90;
  paddle_height = 20;
  paddle_x = width/2 - (paddle_width/2);
  paddle_y = height - (paddle_height);
  score = 0;
  life = 3;
}

function draw() {
  background("black")
  circle(ball_x, ball_y, ball_diameter);
  rect(paddle_x,paddle_y,paddle_width,paddle_height);
  ball_x = ball_x + ball_dx;
  ball_y = ball_y + ball_dy;
  
  textSize(15);
  text(`Score: ${score}`, 10, 30);
  
  textSize(15);
  text(`Life: ${life}`, 330, 30)
  
  
  
  if(ball_x > (width - ball_diameter/2) || ball_x < (0+ball_diameter/2))
  {
    ball_dx = -ball_dx;
  }
  
 if(ball_y <= (0 + ball_diameter/2) )
 {
   ball_dy = - ball_dy;
   
 }
  
  if( ball_y >= (height - ball_diameter/2)){
    ball_dx = ball_dy = 0;
  } 
  
  if (keyIsDown(LEFT_ARROW)) {
    if(paddle_x > 0){
      paddle_x = paddle_x - 2;  
    }
    
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    if(paddle_x < (width-paddle_width)){
      paddle_x = paddle_x + 2;
    }
    
  }
  
  for(let x = 30; x < width-60; x+=70)
  {
    for(let y = 60; y < height-200; y+=30)
    {
      rect(x,y,60,20)
    }
    
  }
  
  if (ball_y + ball_diameter/2 >= paddle_y )
  {
    if(ball_x + ball_diameter/2 > paddle_x && ball_x + ball_diameter/2 < paddle_x + paddle_width)
    {
      ball_dy = -ball_dy
    }
  }
  
  
}




