var tela = document.querySelector(".canvas");
var pincel = tela.getContext("2d");
var palavras = [
    {categoria: "Periféricos", name:"MOUSE"},
    {categoria: "Em que lado da estrada os carros circulam na França?", name:"DIREITA"},
    {categoria: "Qual a parte mais rápida da casa?", name:"CORREDOR"},
    {categoria: "Mês", name:"NOVEMBRO"}
];
var letras = [];
var palavraCorreta = "";
var erros = 9;
var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var letrasErradas = "";
var contador = 0
var vidas = document.querySelector(".vidas");

function sorteiaPalavra() {
    var sorteador = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(sorteador)

    categoriaDaPalavraSorteada = sorteador.categoria; // Extrai a pergunta para o jogo da forca
    console.log(categoriaDaPalavraSorteada)
    escreverPerguntaDaPalavraEscolhida(categoriaDaPalavraSorteada)

    palavraEscolhida = sorteador.name // Extrai a resposta da pergunta, nesse caso é a palavra sorteada aleatoriamente.
    console.log(palavraEscolhida);
    return palavraEscolhida
}

function desenhaTracinhos() {
    pincel.lineWidth = 6    ;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#FFFFFF";
    pincel.beginPath();
    var eixo = 600/palavraEscolhida.length;
    for(let i = 0; i < palavraEscolhida.length; i++) {
        pincel.moveTo(290 + (eixo * i), 200);
        pincel.lineTo(320 + (eixo * i), 200);
    }
    pincel.stroke();
    pincel.closePath();
}desenhaTracinhos(sorteiaPalavra());

function verificarLetraCorreta(key) {
    if(letras.length < 1 || letras.indexOf(key) < 0) {
        letras.push(key)
        return false;
    }else {
        letras.push(key.toUpperCase());
        return true;
    }
}

function escreverLetraCorreta(index) {
    pincel.font = "bold 40px Inter";
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#191970";
    pincel.beginPath();
    var eixo = 600/palavraEscolhida.length;
    pincel.fillText(palavraEscolhida[index] , 290 + (eixo * index), 190);
    pincel.fill();
}

function escreverLetraIncorreta(letra, errorsLeft) {
    pincel.font = "bold 32px Inter";
    pincel.lineWidth = 4;
    pincel.lineCap = "round";
    pincel.linejoin = "round";
    pincel.fillStyle = "#000000";
    pincel.beginPath();
    pincel.fillText(letra, 350 + (40 * (8 - errorsLeft)), 240, 40);
    pincel.fill();
}

function escreverPerguntaDaPalavraEscolhida(pergunta) {
    pincel.font = "bold 30px Edu SA Beginner";
    pincel.lineWidth = 5;
    pincel.fillStyle = "#000000";
    pincel.beginPath()
    pincel.fillText("Pergunta: " + pergunta, 90, 350);
}

function adicionarLetraCorreta(i) {
    palavraCorreta += palavraEscolhida[i].toUpperCase();
    if(palavraCorreta.length == palavraEscolhida.length) {
        desenhaVocêVenceu();
        erros = "none"
    }
    console.log(palavraCorreta);
}

function adicionarLetraIncorreta(key) {
    if(palavraEscolhida.indexOf(key) <= 0) {
        letrasErradas += key.toUpperCase();
        erros -= 1;
        contador += 1
        console.log(erros);
        console.log(contador)
        return letrasErradas
    }
    desenhaForca();
}

document.addEventListener("keydown", function (evento) {
    letra = evento.key.toUpperCase();
    if(!verificarLetraCorreta(evento.key)) {
        if(alfabeto.includes(letra)) {
            if(palavraEscolhida.includes(letra)) {
                if(palavraCorreta.includes(letra)) { 
                    return false
                } else {
                    for(let i = 0; i < palavraEscolhida.length; i++) {
                        if(letra === palavraEscolhida[i]) {
                            document.getElementById(letra).style.visibility = "hidden"
                            escreverLetraCorreta(i);
                            adicionarLetraCorreta(palavraEscolhida.indexOf(letra));
                        }
                    }
                }
            }else {
                if(!verificarLetraCorreta(evento.key))
                return
                if(letrasErradas.includes(letra)) {
                    return false;
                } else {
                    adicionarLetraIncorreta(letra);
                    escreverLetraIncorreta(letra, erros);
                    if(palavraEscolhida.length == palavraCorreta.length) { //Não esconde os botões quando aparecer a mensagem "Parabéns, você venceu!"
                        document.getElementById(letra).disabled = true
                    } else if(contador >= 8) { // verifica se o jogador errou e se errou desativa as letras, impossibilitando delas desaparecerem
                        document.getElementById(letra).disabled = true
                    } else {
                        document.getElementById(letra).style.visibility = "hidden";
                    }
                    desenhaBoneco();
                }
            }
        }
    }
})

function verificaLetraCorretaClicada(tecla) {
	if(palavraEscolhida.length == palavraCorreta.length) { //Não esconde os botões quando aparecer a mensagem "Parabéns, você venceu!"
        document.getElementById(tecla).disabled = true 
    } else if(contador >= 9){  // verifica se o jogador errou e se errou desativa as letras, impossibilitando delas desaparecerem
        document.getElementById(tecla).disabled = true
    } else {
        document.getElementById(tecla).style.visibility = "hidden";
    }
    if(erros > 0) {
        verificaBotao(tecla)
    }
}

function verificaBotao(tecla) {
	var  index = palavraEscolhida.indexOf(tecla);

	if(index < 0) {
        adicionarLetraIncorreta(tecla);
        escreverLetraIncorreta(tecla, erros);
		desenhaBoneco()
	} else {
        if(palavraEscolhida.includes(tecla)) {
            for(let i = 0; i < palavraEscolhida.length; i++) {
                if(tecla === palavraEscolhida[i]) {
                    escreverLetraCorreta(i);
                    adicionarLetraCorreta(palavraEscolhida.indexOf(tecla))
                }
            }
        }
	}
}

if(erros > 8) {
    vidas.textContent = "Vidas: ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️"
}

function desenhaBoneco() {
    if(erros == 8) {
        desenhaForca();
        desenhaColuna();
        vidas.textContent = "Vidas: ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️"
    }
    if(erros == 7) {
        desenhaTraco();
        desenhaTravessa();
        vidas.textContent = "Vidas: ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️"
    }
    if(erros == 6) {
        desenhaMiniColuna();
        vidas.textContent = "Vidas: ❤️ ❤️ ❤️ ❤️ ❤️ ❤️"
    }
    if(erros == 5) {
        desenhaCabeca()
        vidas.textContent = "Vidas: ❤️ ❤️ ❤️ ❤️ ❤️"
    }
    if(erros == 4) {
        desenhaTronco();
        vidas.textContent = "Vidas: ❤️ ❤️ ❤️ ❤️ "
    }
    if(erros == 3) {
        desenhaPernaEsquerda();
        vidas.textContent = "Vidas: ❤️ ❤️ ❤️ "
    }
    if(erros == 2) {
        desenhaPernaDireita();
        vidas.textContent = "Vidas: ❤️ ❤️"
    }
    if(erros == 1) {
        desenhaBracoEsquerdo();
        vidas.textContent = "Vidas: ❤️"
    }
    if(erros == 0) {
        desenhaBracoDireito();
        vidas.textContent = "Vidas: "
    }
    if(erros == 0) {
        desenhaVocêPerdeu();
        erros = "none"
        palavraEscolhida = "none"
    }
    return erros
}

reiniciar = document.getElementById("reiniciarjogo");

reiniciar.addEventListener("click", function() {
    location.reload();
})
// --------------------------------------------------//-------------------------------------------------------

 // o jogo está somando duas vezes as letras 1 do teclado físico e outra do teclado digital. Arrume
// faz o seguinte, quando o jogador acertar a letra no teclado virtual bloqueia a mesma tecla no teclado físico e quando ele acertar a tecla no 
// teclado físico bloqueia ela no teclado virtual, para não ter a probalidade de somar a mesma letra duas vezes.

// arruma de quando recarregar a página a forca já apareça desenhada
