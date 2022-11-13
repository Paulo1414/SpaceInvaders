let velocidadeInimigo = [2, 2.5, 3.2, 5, 3.3, 2.3]
let yInimigo = [-50, -50, -50, -50, -50, -50];
let xInimigo = [10, 150, 200, 270, 320, 380]
let comprimentoInimigo = 30
let alturaInimigo = 30



function mostraInimigo(){
  for(let i=0; i<imagensDosInimigos.length; i++){
  image(imagensDosInimigos[i], xInimigo[i], yInimigo[i] , comprimentoInimigo, alturaInimigo)
}
}

function moverInimigo(){
    for(let i = 0; i<yInimigo.length; i++)
  yInimigo[i] += velocidadeInimigo[i]
}

function voltaPosicaoInicialInimigo(){
  for(let i=0; i < yInimigo.length; i++)
  if( passouTodaTela(yInimigo[i]))
    {
      yInimigo[i] = -50
    }
}
function passouTodaTela(yInimigo){
  return yInimigo > 500
}



