var tela = document.querySelector(".canvas");
var pincel = tela.getContext("2d");

function desenhaForca() {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(100, 200);
    pincel.lineTo(250, 200);
    pincel.stroke();
    pincel.closePath();
}

function desenhaColuna() {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(150, 200);
    pincel.lineTo(150, 10);
    pincel.stroke();
    pincel.closePath();
}

function desenhaTraco() {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(130, 10);
    pincel.lineTo(250, 10);
    pincel.stroke();
    pincel.closePath();
}

function desenhaTravessa() {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(140, 50);
    pincel.lineTo(200, 5);
    pincel.stroke();
    pincel.closePath();
}

function desenhaMiniColuna() {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(250, 10);
    pincel.lineTo(250, 30);
    pincel.stroke();
    pincel.closePath();
}   

function desenhaCabeca() {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.arc(250, 50, 15, 0, 2 * Math.PI);
    pincel.stroke();
    pincel.closePath();
}

function desenhaTronco() {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(250, 65);
    pincel.lineTo(250, 105);
    pincel.stroke();
    pincel.closePath();
}

function desenhaPernaEsquerda() {
    pincel.lineWidth = 8
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(250, 105);
    pincel.lineTo(235, 130);
    pincel.stroke();
    pincel.closePath();
}

function desenhaPernaDireita() {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(250, 105);
    pincel.lineTo(265, 130);
    pincel.stroke();
    pincel.closePath();
}

function desenhaBracoEsquerdo() {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(250, 70);
    pincel.lineTo(235, 95);
    pincel.stroke();
    pincel.closePath();
}

function desenhaBracoDireito() {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(250, 70);
    pincel.lineTo(265, 95);
    pincel.stroke();
    pincel.closePath(); 
}

function  desenhaVocêPerdeu() {
    pincel.font = "bold 45px Inter"
    pincel.lineWidth = 9;
    pincel.fillStyle = "#FFFFFF";
    pincel.beginPath();
    pincel.fillText("Você Perdeu!!", 350, 40)
}

function  desenhaVocêVenceu() {
    pincel.font = "bold 45px Inter"
    pincel.lineWidth = 9;
    pincel.fillStyle = "#FFFFFF";
    pincel.beginPath();
    pincel.fillText("Parabéns, Você venceu!!", 300, 40)
}