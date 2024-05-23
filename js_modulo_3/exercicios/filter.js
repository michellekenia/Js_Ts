// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let numerosPares = numeros.filter(numero => numero % 2 === 0)
// console.log(numerosPares) 

// let numerosMaioresQueCinco = numeros.filter(numero => numero > 5)
// console.log(numerosMaioresQueCinco) 

// let numerosEntreTresNove = numeros.filter(numero => numero >= 3 && numero <= 9)
// console.log(numerosEntreTresNove)


// Dado uma lista de colaboradores, filte somente a funcao == "Diretora".

// const colaboradores =
//   [{ PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora' },
//   { PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
//   { PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
//   { PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
//   { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
//   { PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor' },
//   { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }];


// let filtroDiretora = colaboradores.filter(diretora => diretora.funcao === "Diretora")
// console.log(filtroDiretora)


// // 2) Criar nova array somente com profissionais da área de TI
// const pessoas = [
//     { nome: "Mell", area: "TI", profissao: "dev" },
//     { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
//     { nome: "Melissa", area: "construção", profissao: "engenheira"},
//     { nome: "Madalena", area: "TI", profissao: "infra" },
//     { nome: "Monica", area: "medicina", profissao: "cardiologista"},
//   ]

//  let listaProfissionaisTI =  pessoas.map(pessoa => pessoa.area === "TI")
//  console.log(listaProfissionaisTI)