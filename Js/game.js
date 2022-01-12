var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 1500;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura ,largura);
};

ajustaTamanhoPalcoJogo();

// Aqui irá criar um tempo para cada jogo
var cronometro = setInterval(function() {
    tempo -= 1;
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    };
    
}, 1000);

// Aqui irá fazer com que o mosquito apareça em posições diferentes dentro da tela do jogo
function posicaoRandomica() {

    // Remover Mosquito Anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v' + vidas).src = "/Img/coracao_vazio.png";
            vidas++;
        };
    };

    //Criar mosquito
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    //Criar o elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = '/Img/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    };

    document.body.appendChild(mosquito);
};

// Essa função irá adicionar tamanhos aleatórios para cada criação de um mosquito
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    
    switch(classe) {
        case 0:
            return 'mosquito1';
        
        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';
    };
};

// Essa função irá adicionar posições aleatórias para cada mosquito adicionado
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    
    //Esse switch irá selecionar as classes CSS de cada mosquito
    switch(classe) {
        case 0:;
            return 'LadoEsquerdo';
        
        case 1:;
            return 'LadoDireito';
    };
};