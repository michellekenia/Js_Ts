"use strict";
class Calculadora {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    soma() {
        return this.numero1 + this.numero2;
    }
    subtracao() {
        return this.numero1 - this.numero2;
    }
    multiplicacao() {
        return this.numero1 * this.numero2;
    }
    divisao() {
        if (this.numero1 === 0 || this.numero2 === 0) {
            throw new Error("Não é possível dividir por zero.");
        }
        if (this.numero1 > this.numero2) {
            return this.numero1 / this.numero2;
        }
        return this.numero2 / this.numero1;
    }
}
const calculadora = new Calculadora(2, 2);
console.log(calculadora.divisao());
