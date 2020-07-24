let n = 5;
let linha;
let coluna;
let espaco = '';
let simbolo = '*';

let meioDaPiramide = (n + 1) / 2;
let esquerda = meioDaPiramide;
let direita = meioDaPiramide;

for (linha = 0; linha <= meioDaPiramide; linha += 1) {
    for (coluna = 1; coluna <= n; coluna += 1) {
        if ((coluna > direita) && (coluna < esquerda)) {
            espaco = espaco + simbolo;
        } else {
            espaco = espaco + ' ';
        }
    }
    console.log(espaco);
    espaco = '';
    direita -= 1;
    esquerda += 1;
}