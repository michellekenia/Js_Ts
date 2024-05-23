class ClienteFisico extends Cliente {
    nome: string
    cpf: string

    constructor(nome: string, cpf:string, codigo: number, endereco: string) {
        super(codigo, endereco)
        this.nome = nome
        this.cpf = cpf
    }

    validarCPF(){
        if(this.cpf.length === 11) {
            return "CPF válido."
        }
         
        return "CPF inválido."
    }


}

const clienteFisico = new ClienteFisico("Alice", "111111111-9", 91, "Rua dos Amores")
// console.log(clienteFisico.localizarEndereco())
// console.log(clienteFisico.validarCPF())