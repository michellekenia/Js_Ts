const prompt = require("prompt-sync")(); 
const numeroAleatorio = Math.floor(Math.random() * 100) + 1; 

let numero = prompt("Digite um numero para tentar adivinhar: ");

do {
    numero < numeroAleatorio
} while (console.log("Esse número é menor do que o número de referência, tente novamente.")); 