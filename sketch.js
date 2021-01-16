var car,border1,border2,borde3,border4 , bomb ,health = 3,
    carImag,bgIg,bg,PLAY = 1,END = 0 ,over,game,bullet,bombImg,fruit;
var gameState = PLAY;
function preload(){
  carImag = loadImage("car.jfif");
  bgIg=loadImage("background.png");
  game = loadImage ("gameover.png");
  bombImg = loadImage("alien2.png");
  fruit = loadImage("fruit1.png");
}

function setup() {
  createCanvas(400, 400);
   bg= createSprite(200,200);
  bg.addImage(bgIg);
  car = createSprite(200,300);
  border4 = createSprite(399,200,20,400);
   border3 = createSprite(1,200,20,400);
   border2 = createSprite(200,399,400,20);
   border1 = createSprite(200,0,400,20);
  bombGroup = new Group()
   bulletGroup = new Group()
  bomb = createSprite(0,0,0,0);
  car.addImage(carImag);
  car.scale = 0.2
  over = createSprite(200,200)
  over.addImage(game);
  
}

function draw() {
  background("red");
  
  
  
  if(gameState === PLAY){

   
    
  if(bg.y>300){
    bg.y=bg.width/6
  }
   over.visible= false
    if(keyWentDown("space")){
    spawnBullet();
    }
       
    bg.velocityY=5
  if(keyDown("LEFT_ARROW")){
    car.x-=20
  }
    if(keyDown("RIGHT_ARROW")){
    car.x+=20
  }
  
  spawnBomb()
  
  if(bombGroup.collide(car)){
    health = health-1
    bomb.destroy()
  }
   if(bulletGroup.collide(bombGroup)){
    bomb.destroy()
  }
       
    
    
    
    if(health === 0){
      gameState = END
    }
  }

  
  
  
  
  if(gameState === END) {
  over.visible = true
    bombGroup.setVelocityYEach(0);
    bg.velocityY = 0;
 }
  console.log(health)
  drawSprites();
}

function spawnBomb(){
 if(frameCount % 60 == 0) {
   bomb = createSprite(0,-10)
  bomb.x = Math.round(random(10,380));
  bomb.velocityY = 5
 }
  bombGroup.add(bomb);
  bomb.addImage(bombImg);
}

function spawnBullet(){
  bullet = createSprite(car.x,250)
  bullet.velocityY = -10
  bullet.addImage(fruit);
  bullet.scale = 0.1
  bulletGroup.add(bullet);
}


