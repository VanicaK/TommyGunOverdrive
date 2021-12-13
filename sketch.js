var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;

var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;

var redBubbleGroup, blueBubbleGroup, bulletGroup;


var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("josephTommyGun.png")
  blastImg = loadImage("blast.png")
  // blastImg = Image("blast.png")
   // blastImg = LoadImage("blast.png")
    // blastImg = loadImage("blast.jpg")



  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 600);

  backBoard= createSprite(50, width/2, 50,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
  title= createElement("h1");
  xed= createElement("h2")
}

function draw() {
  background("#BDA297");
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  xed.html("Xedbubble's");
  xed.style('color:green');
  xed.position(width/2-25,7.5)

  title.html("Tommy Gun Overdrive!")
  title.style('color:green');
  title.position(width/2-150,20);

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    gun.y=mouseY  

    if (frameCount % 80 === 0) {
      drawblueBubble();
    }

    if (frameCount % 100 === 0) {
      drawredBubble();
    }

    if(keyDown("space")){
      shootBullet();
    }

    if (blueBubbleGroup.collide(backBoard)){
      handleGameover(blueBubbleGroup);
    }
    if (redBubbleGroup.collide(backBoard)) {
      handleGameover(redBubbleGroup);
    }
    
    if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }

    if(redBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(redBubbleGroup);
    }


    drawSprites();
  }
  if (gameState==2){
    text("skill issue lmao",width/2,height/2);
    textSize(20);
  }
  
    
  
}

function drawblueBubble(){
  bluebubble = createSprite(790,random(30,580),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.1;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);
}
function drawredBubble(){
  redbubble = createSprite(790,random(30,580),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = 0.2;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y+15
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

function handleBubbleCollision(bubbleGroup){
    if (life > 0) {
       score=score+1;
    }

    blast= createSprite(bullet.x+60, bullet.y, 50,50);
    blast.addImage(blastImg)

   //  blast= sprite(bullet.x+60, bullet.y, 50,50);
   // blast.addImage(blastImg)

   //  blast= createSprite(bullet.x+60, bullet.y, 50,50);
   // blast.addImage(blastImg)

   //  blast= createSprite(bullet.x+60, bullet.y, 50,50);
   // image(blastImg)


   blast.scale=0.3
   blast.life=20
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
}

function handleGameover(bubbleGroup){
  
    life=life-1;
    bubbleGroup.destroyEach();
    

    if (life === 0) {
      gameState=2
      
     
    }
  
}
