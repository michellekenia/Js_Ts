"use strict";
class ClienteFisico extends Cliente {
    constructor(nome, cpf, codigo, endereco) {
        super(codigo, endereco);
        this.nome = nome;
        this.cpf = cpf;
    }
    validarCPF() {
        if (this.cpf.length === 11) {
            return "CPF válido.";
        }
        return "CPF inválido.";
    }
}
const clienteFisico = new ClienteFisico("Alice", "3226-9", 91, "Rua dos Amores");
