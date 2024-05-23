"use strict";
class Cliente {
    constructor(codigo, endereco) {
        this.codigo = codigo;
        this.endereco = endereco;
    }
    localizarEndereco() {
        return `O cliente ${this.codigo} reside no endereço ${this.endereco}`;
    }
}
const cliente = new Cliente(91, "Rua das Perdições");
// console.log(cliente.localizarEndereco())
