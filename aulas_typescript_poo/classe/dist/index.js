"use strict";
class Usuario {
    //construtor - como se fosse um inicializador 
    constructor(nome, conta, saldo) {
        this.nome = nome,
            this.conta = conta,
            this.saldo = saldo;
    }
    //métodos 
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor;
    }
}
//objeto 
const usuario1 = new Usuario("Ana", "919992-x", 200);
usuario1.deposito(200);
usuario1.saque(100);
console.log(usuario1);
