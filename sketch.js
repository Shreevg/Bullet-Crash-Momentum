
var wall, bulletSpeed, bulletWeight, thickness, bullet, damage

function setup() {
  createCanvas(1600,400);
  
  thickness = random(12, 83)

bullet = createSprite(50, 200, 50, 20)
wall = createSprite(1500, 200, thickness, height/2)

bulletSpeed = random(23, 32)
bulletWeight = random(30, 52)



bullet.velocityX=bulletSpeed

bullet.shapeColor=color(0,0,255)
wall.shapeColor=color(255,255,0)

damage = (5*bulletWeight*bulletWeight*bulletSpeed)/(thickness*thickness*thickness)
}

function draw() {
  background(255,255,255);  
  

  
  if(hasCollided(bullet, wall))
  {

    
   

    if(damage>10)
    {
wall.shapeColor=color(255,0,0)
bullet.velocityX=0;
    }

    if(damage<=10)
    {
wall.shapeColor=color(0,255,0)
    }

  }
  
  drawSprites();
}


