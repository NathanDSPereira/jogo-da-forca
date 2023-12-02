var palavras = ["JAVASCRIPT", "ALURA", "ORACLE", "COMPUTADOR", "CONSOLE", "INDEX"];
var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var palavra = document.querySelector("#campo-texto");
var botaoAdicionarPalavra = document.querySelector("#adicionar-nova-palavra");


botaoAdicionarPalavra.addEventListener("click", function () {
    var novaPalavra = palavra.value.toUpperCase();
    if(novaPalavra.length > 3 && novaPalavra.length <= 8) {
        if(palavras.includes(novaPalavra)) {
            alert("Essa palavra ja está na lista");
            palavra.value = "";
        } else {
            palavras.push(novaPalavra.toUpperCase());
            alert("Palavra adicionada com sucesso!");
            palavra.value = "";
        }
    } else {
        alert("Digite uma palavra de 3 a 8 caracteres, sem acentos!");
        palavra.value = "";
    }
})