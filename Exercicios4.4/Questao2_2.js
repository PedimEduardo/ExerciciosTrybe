// Questao 2_2 //
function indiceDoMaior(numeros) {
    let maior = 0;
    for (let indice in numeros) {
        if (numeros[maior] < numeros[indice]){
            maior = indice;
        }
    }
    return maior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));