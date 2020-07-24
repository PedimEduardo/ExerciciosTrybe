// Questao 2_3 //
function indiceDoMenor(numeros) {
    let menor = 0;
    for (let indice in numeros) {
        if (numeros[menor] > numeros[indice]){
            menor = indice;
        }
    }
    return menor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));