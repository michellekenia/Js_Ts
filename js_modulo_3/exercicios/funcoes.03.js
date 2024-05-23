// let endereco = {
//     rua: "Rua dos Pinheiros",
//     numero: 1293,
//     bairro: "Centro",
//     cidade: "São Paulo",
//     uf: "SP"
// }

// let nome = "Michelle"
// let sobrenome = "Kênia"


// function dadosPessoa({ rua, numero, bairro, cidade, uf }, nome, sobrenome) {
//     return `A ${nome} ${sobrenome}, mora em ${cidade}/${uf}, no bairro ${bairro}, na rua "${rua}", com nº ${numero}. `
// }


// let todosOsDados = dadosPessoa(endereco, nome, sobrenome)
// console.log(dadosPessoa)




// function getUser(id, nome) {
//   return {
//     id: id,
//     nome: nome
//   }
// }



// let getUser = (id, nome) => ({id: id, nome: nome})

// let pessoa = {
//  id: 1, 
//  nome: "Michelle"
// }

// console.log(getUser(pessoa.id, pessoa.nome))


let livro = {nome: "Mulheres, raça e classe",
descricao:"Da mesma forma que gênero é a maneira como a raça é vivida."}

let getUser = (nome, descricao) => ({nome: nome , descricao: descricao})
console.log(getUser(livro.nome, livro.descricao))