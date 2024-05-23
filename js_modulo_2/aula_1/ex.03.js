const prompt = require("prompt-sync")(); 

let numero = prompt("Digite um numero: ");

// enquanto essa condição for verdadeira, continue a execução
while (numero !== "10") {
    console.log("ops");
    numero = prompt("Digite um numero: ");
}


