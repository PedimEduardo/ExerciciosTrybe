// Exercício 11 //
let bruto = 4000;
let valorFinal = null;
let aliquota = 0;
if(bruto <= 1556.94){
    aliquota = bruto * 0.08;
} else if(bruto <= 2594.92){
    aliquota = bruto * 0.09;
} else if(bruto <= 5189.82){
    aliquota = bruto * 0.11
} else {
    aliquota = 570.88;
}
let baseSalario = bruto - aliquota;
let aliquotaIr = 0;
if (baseSalario <= 1903.98){
    aliquotaIr
} else if(baseSalario >= 2826.65){
    aliquotaIr = baseSalario * 0.075 - 142.80;
} else if(baseSalario >= 3751.05){
    aliquotaIr = baseSalario * 0.15 - 354.80;
} else if(baseSalario >= 4664.68){
    aliquotaIr = baseSalario * 0.225 - 636.13;
} else {
    aliquotaIr = baseSalario * 0.275 - 869.36;
}
valorFinal = baseSalario - aliquotaIr;
console.log(valorFinal);
