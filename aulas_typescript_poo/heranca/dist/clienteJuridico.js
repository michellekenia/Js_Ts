"use strict";
class ClienteJuridico extends Cliente {
    constructor(cnpj, razaoSocial, codigo, endereco) {
        super(codigo, endereco);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }
    validarCNPJ() {
        if (this.cnpj.length === 14) {
            return "CNPJ válido";
        }
        return "CNPJ inválido";
    }
}
const clienteJuridico = new ClienteJuridico("12345678901234", "Pipoquinha Doces", 191, "Rua das Pipocas");
console.log(clienteJuridico.localizarEndereco());
console.log(clienteJuridico.validarCNPJ());
