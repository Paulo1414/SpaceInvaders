function setup() {
  createCanvas(500, 400);
  trilha.loop();
  //posicaoTiro = createVector(100, 340 )
}

function draw() {
  background(250);
  mostraNave();
  mostraInimigo();
  moverNave();
  moverInimigo();
  desenharTiro();
 moverTiro();
  voltaPosicaoInicialInimigo();
  verificaColisao();
  verificaColisaoNave();
  incluiPontos();
  incluirVidas();
  verificaColisaoNave();
}



