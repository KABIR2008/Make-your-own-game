var bgImage
var graveyard
var shooter
var shooting
function preload() {
  bgImage = loadImage("graveyard.jpg");
  shooterImage = loadImage("shooter_1.png");
  shootingImage = loadImage("shooter_3.png");
  zombieImage = loadImage("zombie.png")
  heart1Image = loadImage("heart_1.png")
  heart2Image = loadImage("heart_2.png")
  heart3Image = loadImage("heart_3.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  graveyard = createSprite(width/2,height/2,20,40)
  graveyard.scale = 3
  graveyard.addImage(bgImage)
  shooter = createSprite(width-1000, height-300)
  shooter.addImage(shooterImage)
  shooter.scale = 0.7
  zombieGroup = new Group()
  heart1 = createSprite(width-200,50,20,20)
  heart1.addImage(heart1Image)
  heart1.scale = 0.5
  heart1.visible = false
  heart2 = createSprite(width-200,50,20,20)
  heart2.addImage(heart2Image)
  heart2.scale = 0.5
  heart2.visible = false
  heart3 = createSprite(width-200,50,20,20)
  heart3.addImage(heart3Image)
  heart3.scale = 0.5
}
function draw() {
  background(255,255,255); 
  if (keyDown("UP_ARROW")&&shooter.y > 300) {
    shooter.y = shooter.y - 10
  }

  if (keyDown("DOWN_ARROW")) {
    shooter.y = shooter.y +10
  }

  if (keyDown("LEFT_ARROW")) {
    shooter.x = shooter.x -10
  }

  if (keyDown("RIGHT_ARROW")) {
    shooter.x = shooter.x +10
  }

  if (keyWentDown("space")){
    shooter.addImage(shootingImage)
  }
  else if (keyWentUp("space")) {
    shooter.addImage(shooterImage)
  }

  if (zombieGroup.isTouching(shooter)) {
    for(var i = 0; i < zombieGroup.length; i ++) {
      if(zombieGroup[i].isTouching(shooter)) {
        zombieGroup[i].destroy()
      }
    }
  }
  spawnzombies()



  drawSprites();

}

function spawnzombies(){
  if (frameCount%70==0) {
    zombie = createSprite(random(1000,1800),random(300,900),40,40)
    zombie.addImage(zombieImage)
    zombie.scale = 0.3
    zombie.velocityX = -2
    zombieGroup.add(zombie)
    zombie.lifetime = 1000
    zombie.debug = false
    zombie.setCollider("rectangle",0,0,400,400)
  }
}