const maca = {nome: "Maça", precoDokg: 5.59, categoria: "frutas"}

// lista dentro de []
// objetos dentro de {}

// console.log(maca.nome)
// console.log(maca["categoria"])

// for(const propriedade in maca) {
//     console.log(propriedade + ": " + maca[propriedade])
// }
// console.log(maca)

const pessoas = [
    {nome: "Lisandra Cruz", apelido: "Lis", idade: 2},
    {nome: "Michelle Kênia", apelido: "Mih", idade: 32}
]

// // console.log(pessoas)
// // console.log(pessoas[0])
// const pessoaDado = pessoas[0];
// console.log(pessoaDado.nome)
// console.log(pessoas[0]["nome"])



const numeros = [1, 2, 3, 4, 5, 6, 7, 8,]


console.log(numeros)
// numeros.push(11)
// console.log(numeros)
// numeros.pop()
// console.log(numeros)

// const novoArray = []
// for (let cont = 0; cont < numeros.length; cont++) {
//     if (numeros[cont] !=4) {
//         novoArray.push(numeros[cont])
//     }
// }


// for of foi mais simples de compreender
const novoArray = []
for(const elemento of numeros){
    if(elemento != 4) {
      novoArray.push(elemento)
    }
  }
  console.log(novoArray)