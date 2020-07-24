// Questao 2_1 //
function verificaPalindromo(palavra) {
    let letras = palavra.split("");
    let palindromo = true;
    for (let indice in letras) {
        if (letras[indice] != palavra[(palavra.length - 1) - indice]) {
            palindromo = false;
        }
    }
    return palindromo;
}
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));