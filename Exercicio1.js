//Exercicio 1//
    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  return arrays.reduce((acumulator, array) => acumulator.concat(array))
  
}


assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);