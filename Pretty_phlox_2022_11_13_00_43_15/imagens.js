let imagemDaNave;
let imagemInimigo1;
let imagemInimigo2;
let imagemInimigo3;
let imagemDoLaser;

function preload(){
  imagemDaNave = loadImage("imagens/nave.png")
  imagemDoInimigo1 = loadImage("imagens/inimigo.png")
  imagemDoInimigo2 = loadImage("imagens/alien2.png")
  imagemDoInimigo3 = loadImage("imagens/alien3.png")
  imagemDoLaser = loadImage("imagens/laser.png")
   imagensDosInimigos = [imagemDoInimigo1, imagemDoInimigo2, imagemDoInimigo3, imagemDoInimigo1, imagemDoInimigo2, imagemDoInimigo3]
  
  somDaColisao = loadSound("sons/colidiu.mp3")
  
  choque = loadSound("sons/raquetada.mp3")
  trilha = loadSound("sons/trilha1.mp3")
  
}