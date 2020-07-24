// Exercicio 6//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 1){
        result += 1;
    } 
}
    if(result === 0){
        console.log("Nenhum valor ímpar encontrado!");
    } else{
        console.log(result);
    }