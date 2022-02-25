let height = 0;
let width = 0;
let lives = 1;
let time = 15;

let breedMosquitoTime = 1500;

let level = window.location.search;
level = level.replace(`?`, ``);

if (level === `normal`) {
    breedMosquitoTime = 1500;

} else if (level === `dificil`) {
    breedMosquitoTime = 1000;

} else if (level === `chucknorris`) {
    breedMosquitoTime = 750;
}

function ajustaTamanhoPalcoJogo() {
    height = window.innerHeight;
    width = window.innerWidth;
};

ajustaTamanhoPalcoJogo();

const stopwatch = setInterval(() => {
    time -= 1;
    if (time < 0) {
        clearInterval(stopwatch);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = time;
    };
    
}, 1000);

function posicaoRandomica() {
    // Remover Mosquito Anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if(lives > 3) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v' + lives).src = "/Img/coracao_vazio.png";
            lives++;
        };
    };

    let positionX = Math.floor(Math.random() * width) - 90;
    let positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    const mosquito = document.createElement('img');
    mosquito.src = '/Img/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    };

    document.body.appendChild(mosquito);
};

function tamanhoAleatorio() {
    const className = Math.floor(Math.random() * 3);
    
    switch(className) {
        case 0:
            return 'mosquito1';
        
        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';
    };
};

function ladoAleatorio() {
    const className = Math.floor(Math.random() * 2);
    
    switch(className) {
        case 0:;
            return 'LadoEsquerdo';
        
        case 1:;
            return 'LadoDireito';
    };
};