// Questao 2_7 //
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split("");
    fimPalavra = fimPalavra.split("");
    controle =  true;
    for (let i = 0; i < fimPalavra.length; i++) {
        if(palavra[palavra.length-fimPalavra.length+i] != fimPalavra[i]) {
            controle = false;
            break;
        }
    }
    return controle;
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("pedroeduardo", "eduard"));