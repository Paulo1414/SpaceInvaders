//variaveis nave
let yPosicaoNave = 366;
let xPosicaoNave = 90;
let posicaoTiro =[];
let velocidadeNave = 1.5;
let meusPontos = 0;
let textoPontos = "PONTOS"
let somDaColisao;
let vidas = 3;
let textoVidas = "VIDAS"
let choque;

function mostraNave(){
  
  image(imagemDaNave, xPosicaoNave, yPosicaoNave, 30, 30)
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(textoPontos + " " + meusPontos, width / 5, 27);
}

function incluirVidas(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(textoVidas + " " + vidas, width / 1.2 , 27);
}

function moverNave(){
  if(keyIsPressed == true){
    keyPressed();
  }
}

function keyPressed(){
  if(xPosicaoNave <= 400){
  if(keyCode === RIGHT_ARROW){
    xPosicaoNave = xPosicaoNave + velocidadeNave;
  }
  }
  if(xPosicaoNave > 0){
  if(keyCode === LEFT_ARROW){
    xPosicaoNave = xPosicaoNave - velocidadeNave;
  }
  }
}


function mousePressed(){
  //novo dispparo no vetor
  posicaoTiro.push(createVector(xPosicaoNave+10, yPosicaoNave-33))
  
}

function desenharTiro(){
  //para cada posicao do array posicaoTiro desenhar um tiro
  for(let posicao of posicaoTiro){
    image(imagemDoLaser, posicao.x, posicao.y, 10, 10)
  }
}

function moverTiro(){
  //varios tiros, sempre usar um laco de repeticao
  for(let posicao of posicaoTiro){
    posicao.y = posicao.y - 10
  }
}
function verificaColisao(){
  //colisao = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
  for(let i=0; i<imagensDosInimigos.length; i++){
  for(let posicao of posicaoTiro){
    colisao = collideRectRect(xInimigo[i], yInimigo[i], comprimentoInimigo, alturaInimigo, posicao.x, posicao.y, 10,10);
    if(colisao){
      somDaColisao.play();
  print("colidiu")
      yInimigo[i] = -50
       posicao.y = -1000
      marcaPonto();
    }

 
    }
    
  }
}
function perdeVida(){
  vidas -= 1;
}

function vidasMaiorQueZero(){
  return vidas > 0
}

function marcaPonto(){
  meusPontos += 1
}

function passouAtela(){
    for(let posicao of posicaoTiro){
      if(posicao.y < 0){
        posicao.y = 600
      }
    }
}
function verificaColisaoNave(){
  //colisao = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
  for(let i=0; i<imagensDosInimigos.length; i++){
    colisao = collideRectRect(xInimigo[i], yInimigo[i], comprimentoInimigo, alturaInimigo, xPosicaoNave, yPosicaoNave, 30,30);
     if(colisao){
      choque.play();
       
        yInimigo[i] = -50
       if(vidasMaiorQueZero()){
       perdeVida();
       }
  print("colidiu")
    }

 
    }
   
  
}