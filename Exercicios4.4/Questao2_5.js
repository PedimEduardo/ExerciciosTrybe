// Questão 2_6 // 
function maisRepetido(numeros) {
    let contarRepetido = 0;
    let contarNumero = 0;
    let indiceNumeroRepetido = 0;
    for (let indice in numeros) {
        let verNumero = numeros[indice]; 
        for (let indice2 in numeros) {
            if (verNumero === numeros[indice2]) {
                contarNumero += 1;
            }
        }
        if (contarNumero > contarRepetido) {
            contarRepetido = contarNumero;
            indiceNumeroRepetido = indice;
        }
        contarNumero = 0;
    }
    return numeros[indiceNumeroRepetido];
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));