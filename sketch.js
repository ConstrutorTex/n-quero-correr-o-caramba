var bomb, bombImg, coin, coinImg, energia, energiaImg, path, pathImg, power, powerImg, runner, runnerAnimation;
function preload(){
  //imagens pré-carregadas
  runnerAnimation = loadAnimation("corre1.png", "corre2.png")
  pathImg = loadImage("path.png")
  //daq a pouco as image

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path = createSprite(200, 200, 100, 100)
  path.addImage(pathImg)
  path.velocityY = 5;
  path.scale = 1.5
  runner = createSprite(200, 330, 50, 50)
  runner.scale = 0.1
  runner.addAnimation("run", runnerAnimation)
}

function draw() {
  background(0);
  runner.x = mouseX;
  if(path.y >= 400){
    path.y = 0
  }
  drawSprites();
}
