var unicorn, unicornImg;
var stone, stoneImg, stonesGroup;
var bush, bushImg, bushGroup;
var backgroundImg;


function preload() {
unicornImg=loadAnimation("unicorn-1.png", "unicorn-2.png", "unicorn-3.png");

stoneImg=loadImage("stone.png");
bush=loadImage("bush.png");

backgroundImg=loadImage("background.jpg");
    
}



function setup() {
    createCanvas(1000, 750);

    unicorn=createSprite(70, 200);
    unicorn.addAnimation("running", unicornImg);

    stonesGroup=new Group();
    bushGroup=new Group();



}



function draw() {
background(backgroundImg);

    spawnStone();
    spawnBush();


    drawSprites();
}


function spawnStone() {
    if(frameCount % 200 === 0) {
      var stone = createSprite(1000,560,10,40);
      stone.velocityX = -4;
      //generate random stones
      var rand = Math.round(random(1));
      switch(rand) {
        case 1: stone.addImage(stoneImg);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the stone           
      stone.scale = 0.2;
      stone.lifetime = 250;
  
     
      
      //add each stone to the group
      stonesGroup.add(stone);
    }
  }


  function spawnBush() {
    if(frameCount % 200 === 0) {
      var bush = createSprite(1000,560,10,40);
      bush.velocityX = -4;
      //generate random bushs
      var rand = Math.round(random(1));
      switch(rand) {
        case 1: bush.addImage(bushImg);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the bush           
      bush.scale = 0.2;
      bush.lifetime = 250;
  
      
      
      //add each bush to the group
      bushsGroup.add(bush);
    }
  }