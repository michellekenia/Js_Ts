const prompt = require("prompt-sync")(); 

const numero = prompt("Digite um numero para testar o fatorial: ");

let fatorial = 1; 
for (let i = 1; 1 <= numero; i++) {
    fatorial *= i; 
}

console.log(fatorial)