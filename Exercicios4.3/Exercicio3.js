//Exercicio 3//
let n = 5;
let coluna;
let linha;
let posicao = n;
let simbolo = "*";
let espaco = "";

for (linha = 0; linha < n; linha += 1) {
    for (coluna = 0; coluna <= n; coluna += 1) {
        if(coluna < posicao) {
            espaco = espaco + " ";
        } else {
            espaco = espaco + simbolo;
        }
    }
    console.log(espaco);
    espaco = "";
    posicao -= 1;
}

